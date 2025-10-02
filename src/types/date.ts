/**
 * 날짜 범위 타입 정의
 * @description 지원되는 날짜 범위 옵션들
 */
export type DateRangeType = 'today' | 'yesterday' | '7d' | '30d' | '3m' | '6m' | '12m' | 'custom';

/**
 * 커스텀 날짜 범위 타입 정의
 * @description 사용자가 직접 선택한 날짜 범위
 */
export type CustomDateRange = {
  startDate: Date;
  endDate: Date;
};
