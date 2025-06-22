interface AboutSnoProps {
    params: {
      sno: string;
    };
  }
  
  export default function AboutSno({ params }: AboutSnoProps) {
    const { sno } = params;
  
    return (
      <div>
        <h1>About Sno !</h1>
        <p>Param sno: {sno}</p>
      </div>
    );
  }
  
