import { DateRangeType, CustomDateRange } from '@DataTypes/date';
import { format, startOfDay, subDays, subMonths, addDays } from 'date-fns';
import { toZonedTime, format as formatTz } from 'date-fns-tz';

/**
 * google.protobuf.Timestamp를 Date 객체로 변환하는 공통 함수
 * @param timestamp - 변환할 timestamp 객체 (seconds: bigint, nanos: number)
 * @returns 변환된 Date 객체 또는 null (timestamp가 없는 경우)
 */
const timestampToDate = (timestamp?: { seconds: bigint; nanos: number }): Date | null => {
  if (!timestamp) return null;

  const seconds = Number(timestamp.seconds);
  const milliseconds = seconds * 1000 + Math.floor(timestamp.nanos / 1000000);

  return new Date(milliseconds);
};

/**
 * google.protobuf.Timestamp를 가독성 있는 형식으로 변환하는 함수
 * @param timestamp - 변환할 timestamp 객체 (seconds: bigint, nanos: number)
 * @param timeZone - 타임존 ID
 * @returns 가독성 있는 형식의 날짜 문자열 (예: Dec 6, 2024, 3:58 AM) 또는 빈 문자열 (timestamp가 없는 경우)
 */
export const formatTimestampReadable = (timestamp?: { seconds: bigint; nanos: number }, timeZone?: string): string => {
  const date = timestampToDate(timestamp);
  if (!date) return '';

  // 타임존이 제공된 경우 해당 타임존으로 변환하여 포맷팅
  if (timeZone) {
    return formatTz(date, 'MMM d, yyyy, h:mm a', { timeZone });
  }

  // 타임존이 없는 경우 기본 포맷팅
  return format(date, 'MMM d, yyyy, h:mm a');
};

/**
 * 커스텀 날짜 범위를 처리하여 필터 문자열을 생성하는 함수
 * @param customRange - 사용자가 선택한 커스텀 날짜 범위
 * @param timeZone - 타임존 ID (예: "America/Los_Angeles")
 * @returns SQL WHERE 절에 사용되는 것으로 보이는 필터 문자열
 */
export const getCustomDateRangeFilter = (customRange: CustomDateRange, timeZone?: string): string => {
  // 시작일은 00시, 종료일은 다음날 00시로 설정
  const startDate = startOfDay(addDays(customRange.startDate, 1));
  const endDate = startOfDay(addDays(customRange.endDate, 2));

  // 타임존이 제공된 경우 해당 타임존의 날짜 기준으로 계산
  if (timeZone) {
    const zonedStartDate = toZonedTime(startDate, timeZone);
    const zonedEndDate = toZonedTime(endDate, timeZone);

    const startTimeString = formatTz(zonedStartDate, "yyyy-MM-dd'T'00:00:00'Z'", { timeZone });
    const endTimeString = formatTz(zonedEndDate, "yyyy-MM-dd'T'00:00:00'Z'", { timeZone });

    return `create_time >= "${startTimeString}" AND create_time < "${endTimeString}"`;
  }

  // 타임존이 없는 경우 기본 계산
  const startTimeString = format(startDate, "yyyy-MM-dd'T'HH:mm:ss'Z'");
  const endTimeString = format(endDate, "yyyy-MM-dd'T'HH:mm:ss'Z'");

  return `create_time >= "${startTimeString}" AND create_time < "${endTimeString}"`;
};

/**
 * 날짜 범위를 계산하여 필터 문자열을 생성하는 함수
 * @param rangeType - 날짜 범위 타입 (today, yesterday, 7d, 30d, 3m, 6m, 12m, custom)
 * @param timeZone - 타임존 ID (예: "America/Los_Angeles")
 * @param customRange - 커스텀 날짜 범위 (rangeType이 'custom'인 경우에만 필요)
 * @returns SQL WHERE 절에 사용되는 것으로 보이는 필터 문자열
 * @throws {Error} 지원하지 않는 날짜 범위 타입인 경우
 */
export const getDateRangeFilter = (
  rangeType: DateRangeType,
  timeZone?: string,
  customRange?: CustomDateRange,
): string => {
  const now = new Date();

  let startDate: Date;
  let endDate: Date;

  switch (rangeType) {
    case 'today':
      startDate = startOfDay(now);
      endDate = now;
      break;
    case 'yesterday':
      startDate = startOfDay(subDays(now, 1));
      endDate = startOfDay(now);
      break;
    case '7d':
      startDate = startOfDay(subDays(now, 7));
      endDate = now;
      break;
    case '30d':
      startDate = startOfDay(subDays(now, 30));
      endDate = now;
      break;
    case '3m':
      startDate = startOfDay(subMonths(now, 3));
      endDate = now;
      break;
    case '6m':
      startDate = startOfDay(subMonths(now, 6));
      endDate = now;
      break;
    case '12m':
      startDate = startOfDay(subMonths(now, 12));
      endDate = now;
      break;
    case 'custom':
      if (!customRange) {
        throw new Error('커스텀 날짜 범위가 제공되지 않았습니다.');
      }
      return getCustomDateRangeFilter(customRange, timeZone);
    default:
      throw new Error(`지원하지 않는 날짜 범위 타입입니다: ${rangeType}`);
  }

  // 타임존이 제공된 경우 해당 타임존의 날짜 기준으로 계산
  if (timeZone) {
    const zonedStartDate = toZonedTime(startDate, timeZone);
    const zonedEndDate = toZonedTime(endDate, timeZone);

    const startTimeString = formatTz(zonedStartDate, "yyyy-MM-dd'T'HH:mm:ss'Z'", { timeZone });
    const endTimeString = formatTz(zonedEndDate, "yyyy-MM-dd'T'HH:mm:ss'Z'", { timeZone });

    return `create_time >= "${startTimeString}" AND create_time < "${endTimeString}"`;
  }

  // 타임존이 없는 경우 기본 계산
  const startTimeString = format(startDate, "yyyy-MM-dd'T'HH:mm:ss'Z'");
  const endTimeString = format(endDate, "yyyy-MM-dd'T'HH:mm:ss'Z'");

  return `create_time >= "${startTimeString}" AND create_time < "${endTimeString}"`;
};
