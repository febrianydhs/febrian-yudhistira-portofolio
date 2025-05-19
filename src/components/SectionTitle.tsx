
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({ title, subtitle, centered = false, className = '' }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-finance-blue-dark font-playfair">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-gray-600 max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-24 h-1 bg-finance-gold rounded-full"></div>
    </div>
  );
};

export default SectionTitle;
