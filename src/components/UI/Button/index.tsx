import Link from 'next/link';

type Sizes = 'Small' | 'Medium' | 'Large';

const ButtonUI = ({
  text,
  linkButton,
  outline,
  sizes,
}: {
  text: string;
  linkButton: string;
  outline?: boolean;
  sizes: Sizes;
}) => {
  return (
    <Link href={linkButton}>
      <a
        className={
          'flex items-center justify-center w-auto py-2 px-4 font-primary font-medium rounded-md whitespace-nowrap transition-all duration-300' +
          (outline
            ? ' text-tertiary bg-white border border-tertiary hover:text-white hover:bg-tertiary hover:border-white'
            : ' text-white bg-tertiary hover:bg-accent-hover') +
          (sizes === 'Small'
            ? ' h-[28px] lg:h-[38px] shadow-md'
            : sizes === 'Medium'
            ? ' h-[34px] lg:h-[44px] shadow-lg'
            : ' h-[40px] lg:h-[50px] shadow-xl')
        }
      >
        {text}
      </a>
    </Link>
  );
};
export default ButtonUI;
