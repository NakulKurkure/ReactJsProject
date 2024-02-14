
import "./RealvideoCss.css";

const Realvideo = () => {



    return ( <>

        <div className='containervid'>

            <div className="v1">
        <p>The Match </p>
       
       {/* iframe- uses for embedded videos */}
       <iframe width="500" height="290" src="https://www.youtube.com/embed/uy2ENb0unf8?si=cYCYuQMc_9jyc_cK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            </div>
            <div className="v1">
            <p> WWE Match </p>

            <iframe width="500" height="290" src="https://www.youtube.com/embed/fwfp4i5Y1TY?si=sOM5zxHIiLgerGw9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div >

        </div>

        </>
    )
}

export default Realvideo;