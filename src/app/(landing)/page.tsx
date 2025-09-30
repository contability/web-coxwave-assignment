import Link from 'next/link';
import React from 'react';

const LandingPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <section className="mx-auto max-w-4xl text-center">
        <header>
          <h1 className="mb-6 text-4xl leading-tight font-bold text-slate-900 md:text-6xl">
            콕스웨이브
            <span className="mt-2 block text-3xl text-blue-600 md:text-5xl">사전 과제</span>
          </h1>
        </header>

        <div className="mb-12">
          <Link
            href="/admin/management/users/cloud/list"
            className="inline-flex transform items-center rounded-lg border border-blue-600 bg-blue-600 px-8 py-4 text-lg font-medium text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl focus:ring-4 focus:ring-blue-300 focus:outline-none"
            role="button"
            aria-label="이벤트 조회 페이지로 이동"
          >
            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            이벤트 조회
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
