import type { ReactNode } from "react";

const Center = (props: { children: ReactNode }) => {
  return (
    <>
      <div className='flex w-full min-h-[100vh] items-center justify-center'>{props.children}</div>
    </>
  );
};

export default Center;
