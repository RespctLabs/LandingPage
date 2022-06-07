import React from "react";

function IntroSection() {
	return (
		<div
			className="bg-[url('/images/controller.png')] bg-contain bg-no-repeat bg-center flex items-center flex-col justify-center h-screen overflow-hidden bg-[#17181e]"
			id="mainI"
		>
			<span className="text-center text-7xl text-[#aaaaaa] font-bold">
				Homepage of
			</span>
			<span className="font-bold pb-4 text-center text-7xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-800">
				Web3 Gaming
			</span>
			<p className="text-center text-xs text-[#a7a7a7] my-8" id="introtxt">
				Onboarding Games and Gamers to the Metaverse with
				<br />
				Respct&apos;s Ecosystem
			</p>
			<button
				data-tally-open="3lbqpo"
				data-tally-layout="modal"
				className="px-4 py-2 z-10 bg-gradient-to-r from-cyan-500 to-violet-800 rounded-2xl hover:from-violet-800 hover:to-cyan-500 transform duration-200 ease-in"
			>
				Early Access
			</button>
		</div>
	);
}

export default IntroSection;
