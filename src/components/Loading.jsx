import DotLoader from "react-spinners/ClipLoader"; 

export default function Loading() {
    return(
        <div className="flex flex-col w-10 mx-auto justify-center text-center text-primary">            
            <DotLoader className="flex justify-center ml-3" />
            <p className="text-center">Loading....</p>
        </div>
    )
} 