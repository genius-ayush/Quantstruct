import Image from 'next/image';
interface CompanyLogoInterface{
    className ?: string ; 
}
export const CompanyLogo = ({className} : CompanyLogoInterface) => {
    return (
      <div className={`flex items-center gap ${className}`}>
        <Image
          src={'/mainlogo.avif'}
          alt="QuantstructLogo"
          width={30}
          height={30}
          className="rounded"
          priority
        />
        <h3 className="text-3xl font-bold text-[#C89868]">
          uantstruct</h3>
      </div>
    );
  };