import React from "react";


function trustSection() {
	return (
		<>
			<div id="trustBody">
				<div
					id="moveLeft"
<<<<<<< HEAD
					style={{ width: "70%", marginTop: "5%",display: "flex" }}
				>
					<img src={"/images/panel.png"} style={{ marginRight: "3%" }}/>
					<img src={"/images/panel.png"} style={{ marginRight: "3%" }}/>
					<img src={"/images/panel.png"} style={{ marginRight: "3%" }}/>
					<img src={"/images/panel.png"} style={{ marginRight: "3%" }}/>
					<img src={"/images/panel.png"} style={{ marginRight: "3%" }}/>
					
				</div>
				<div style={{ display: "flex" }} className="font-bold pb-4 text-center text-7xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-800">
					<span id="titleColor" style={{ marginRight: "0.3em" }}>
						Trusted
=======
					src={"/images/panel.png"}
					style={{ width: "70%", marginTop: "5%" }}
				/>
				<div style={{ display: "flex" }}>
					<span id="titleColor" style={{ marginRight: "0.3em", fontSize: "1.2rem" }}>
						Trusted by the industry
>>>>>>> 4983e396e83868b28e1b59f1b23818f6b6cec9c7
					</span>
					
				</div>
				<img
					src={"/images/Games.png"}
					style={{ position: "absolute", right: "2vw", top: "5vw", opacity:"0.8" }}
				></img>
				<img
					src={"/images/Guilds.png"}
					style={{
						position: "absolute",
						left: "2vw",
						bottom: "5vw",
						zIndex: "10",
						opacity: "0.8"
					}}
				></img>
				<p id="descp" style={{ fontSize: "1.2rem" }}>
					We are a decentralized autonomous organization on a mission to
					revolutionize gaming.
					<br />
					Let&apos;s build the metaverse by empowering people to be a part of
					it.
				</p>
				<button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-violet-800 rounded-2xl hover:from-violet-800 hover:to-cyan-500 transform duration-200 ease-in" id="ebt">
				Early Access
			</button>
				<img
					id="moveRight"
					style={{ width: "70%", marginBottom: "5%",display: "flex"}}
				>
					<img src={"/images/panel.png"} style={{ marginRight: "3%" }}/>
					<img src={"/images/panel.png"} style={{ marginRight: "3%" }}/>
					<img src={"/images/panel.png"} style={{ marginRight: "3%" }}/>
					<img src={"/images/panel.png"} style={{ marginRight: "3%" }}/>
					<img src={"/images/panel.png"} style={{ marginRight: "3%" }}/>
					
				</div>
			</div>
		</>
	);
}

export default trustSection;
