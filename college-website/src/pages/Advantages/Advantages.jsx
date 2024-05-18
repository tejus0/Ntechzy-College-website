import { AdvantagesList } from "./AdvantageList";

export const Advantages = () => {
    return (
      <div id="getting-started" className="relative isolate">
        {/* <h2 className="sr-only ">Getting Started</h2> */}
        <div className="mt-5 pl-9 mb-[-2%]">
        <h1 className="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Advantages</span> @Apex University</h1>
        </div>
        <div className="lg:columns-2 lg:gap-16 mx-auto pt-12 mt-16 pb-20 sm:mt-20 lg:px-32">
          <ul role="list" className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5">
            {AdvantagesList &&
              AdvantagesList.map((item, itemIdx) => (
                <li key={`section-even-${itemIdx}`} className="relative flex gap-x-6 py-12 px-12 hover:bg-gray-50">
                  <div className="flex w-11 flex-none items-center justify-center rounded-lg bg-gray-50">
                    <item.icon className="h-6 w-6 text-gray-600" aria-hidden="true" />
                  </div>
                  <div className="flex-auto">
                    <div className=" font-semibold leading-6 text-gray-900">
                      <a href={item.href}>
                        <span className="absolute inset-0" aria-hidden="true" />
                        {item.name}
                      </a>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
                  </div>
                  {/* <div className="flex-none self-center">
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div> */}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  };