interface ButtonProps {
  children: React.ReactNode;
  variation?: 'primary' | 'secondary' | 'danger' | 'third' | 'four' | 'five' | 'six';
}

export default function Button({ children, variation = 'primary' }: ButtonProps) {
  const baseClasses =
    'px-4 py-2 font-medium transition-all duration-200 hover:cursor-pointer flex items-center gap-2';

  const variations: Record<string, string> = {
    primary:
      'rounded-full bg-[#0f3d3e] border border-[#0f3d3e] text-white hover:bg-[#f1f1f1] hover:border-[#0f3d3e] hover:text-[#111827]',
    secondary:
      'rounded-full text-[#111827] border border-[#0f3d3e] hover:bg-[#0f3d3e] hover:text-white',
    third: 'rounded-full text-[#111827] hover:underline',
    four: 'rounded-full bg-[#0f3d3e] border border-[#0f3d3e] text-white hover:bg-[#ffffff] hover:border-[#0f3d3e] hover:text-[#111827]',
    danger: 'rounded-full bg-red-600 text-white hover:bg-red-700',
    five: 'rounded-md bg-[#0f3d3e] border border-[#0f3d3e] text-white hover:bg-[#f1f1f1] hover:border-[#0f3d3e] hover:text-[#111827]',
    six: 'rounded-md bg-[#0f3d3e] border border-[#0f3d3e] text-white hover:bg-[#E2DCC8] hover:border-[#0f3d3e] hover:text-[#111827]',
  };

  const classes = `${baseClasses} ${variations[variation] || variations.primary}`;

  return <button className={classes}>{children}</button>;
}
