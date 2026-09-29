const profile = [
  { label: "관심 분야", value: "인간 중심 인공지능 (Human-Centered AI)" },
  { label: "관심 주제", value: "사람이 AI를 이해하고 신뢰하는 방법" },
  { label: "학사", value: "IT · 통계 전공" },
  { label: "석사", value: "IT (인간 중심 AI 연구실)" },
  { label: "일하는 태도", value: "기술보다 사람을 먼저 생각합니다" },
];

const activities = [
  { period: "---", title: "---", detail: "---" },
  { period: "---", title: "---", detail: "---" },
];

const sns = [
  { name: "Instagram", url: "https://www.instagram.com/yeinee.k/" },
  { name: "GitHub", url: "" },
  { name: "Blog", url: "" },
];

const pillBase =
  "inline-flex items-center rounded-full border px-4 py-1.5 text-sm border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-300";

export default function Home() {
  return (
    <main>
      <section className="flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center">
        <h1 className="max-w-[90vw] break-words text-4xl font-bold tracking-tight sm:text-6xl">
          yein
        </h1>
        <p className="mt-4 max-w-[90vw] text-lg break-words text-gray-600 sm:text-xl dark:text-gray-400">
          기술보다 사람을 먼저 생각하는, 인간 중심 AI를 만듭니다.
        </p>
      </section>

      <div className="mx-auto w-full max-w-3xl space-y-14 px-6 pb-24 sm:space-y-16">
        <section className="border-t border-gray-200 pt-8 dark:border-gray-800">
          <h2 className="text-sm font-semibold tracking-widest text-gray-500">
            프로필
          </h2>
          <div className="mt-6 flex items-start gap-5">
            <div
              aria-hidden="true"
              className="h-16 w-16 shrink-0 rounded-lg bg-gray-200 dark:bg-gray-800"
            />
            <dl className="min-w-0 flex-1 space-y-3">
              {profile.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <dt className="w-24 shrink-0 text-sm text-gray-500">
                    {item.label}
                  </dt>
                  <dd className="min-w-0 break-words text-base text-gray-900 dark:text-gray-100">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-t border-gray-200 pt-8 dark:border-gray-800">
          <h2 className="text-sm font-semibold tracking-widest text-gray-500">
            활동
          </h2>
          <ol className="mt-6 space-y-6">
            {activities.map((item) => (
              <li
                key={item.title}
                className="flex flex-col gap-1 sm:flex-row sm:gap-6"
              >
                <span className="w-24 shrink-0 font-mono text-sm text-gray-500">
                  {item.period}
                </span>
                <div className="min-w-0">
                  <p className="break-words font-medium text-gray-900 dark:text-gray-100">
                    {item.title}
                  </p>
                  <p className="mt-0.5 break-words text-sm text-gray-600 dark:text-gray-400">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-gray-200 pt-8 dark:border-gray-800">
          <h2 className="text-sm font-semibold tracking-widest text-gray-500">
            SNS
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {sns.map((item) => (
              <li key={item.name}>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`${pillBase} hover:border-gray-900 hover:text-gray-900 dark:hover:border-gray-100 dark:hover:text-gray-100`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <span
                    className={`${pillBase} border-dashed opacity-70`}
                    aria-disabled="true"
                  >
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
