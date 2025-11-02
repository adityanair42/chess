import { useNavigate } from "react-router-dom"

export const Landing = () => {
  const navigate = useNavigate();
  return <div>
    <div className="pt-16  flex justify-center">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="ml-4 flex justify-center">
          <div className="max-w-lg">
            <img src="chessboard.png" alt="" />
          </div>
        </div>
        <div className="ml-24 pt-16">
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold text-white">Play Chess on the #1 Site!</h1>
          </div>
          <div className="flex justify-center pt-10">
            <button onClick={() => {
              navigate("/game")
            }} className="bg-[#81b64c] font-bold text-lg text-white px-10 py-2 rounded-md">
              Play Online
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
}