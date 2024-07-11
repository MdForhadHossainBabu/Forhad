import QRCode from "react-qr-code";


const Scanner = () => {
 return (
   <div
   // style={{ height: 'auto', margin: '0 auto', maxWidth: 64, width: '100%' }}
   className="border p-1 w-20"
   >
     <QRCode
       size={256}
       style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
       value={'https://www.linkedin.com/in/mdforhadhossainbabu'}
       viewBox={`0 0 256 256`}
     />
   </div>
 );
};

export default Scanner;