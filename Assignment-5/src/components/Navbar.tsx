import icon from "../assets/logo-text.png"

const nav = () => {
    return (
      <nav className="sticky top-0 z-50 bg-white">
    <div  className="flex justify-center items-center container mx-auto px-10 mt-5 sticky top-0 z-50 bg-white ">
     <div className="mr-50">
           
        <img src={icon} alt="" className="h-auto shrink-0" />
       
     </div>
       
         <ul  className="flex gap-10 mr-50">
          <li className="font-semibold text-pink-600">Home</li>
          <li className="font-semibold text-cyan-950">Technologies</li>
          <li className="font-semibold text-cyan-500">Projects</li>
          <li className="font-semibold text-green-700">About</li>
          <li className="font-semibold text-blue-700">Contact</li>
        </ul>
   

<div className="flex gap-3">
          
   <button className="btn btn-dash btn-primary">Sign in</button>
      <button className="btn btn-active btn-secondary rounded-full">Sign up</button>
       
</div>
    </div>

{/* Banner div started */}

      </nav>


    );
};

export default nav;

  