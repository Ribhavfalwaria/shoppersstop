

const FeedbackCard = ({name,content}:{name:string,content:string}) => {
  return (
   <section className="w-[400px] my-3 bg-gray-400 rounded-xl xs:w-29 object-contain flex">
    <div className="flex flex-col  flex-wrap">
{/* <img src={quotes} alt="qu" style={{height:"200px", width:"200px"}} /> */}
        <h1 className="p-4 font-poppins text-xl font-normal">{content}</h1>
        
        <p className="mt-3 mx-4 font-poppins text-gray-200">{name}</p>
    </div>
   </section>
  );
};

export default FeedbackCard;
