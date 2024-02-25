const elC = document.getElementById( 'Carousel' );

elC.addEventListener( 'mousedown' , hold , false );
elC.addEventListener( 'touchstart' , hold, false );

elC.addEventListener( 'mouseup' , release , false );
elC.addEventListener( 'touchend' , release , false );

elC.addEventListener( 'touchmove' , e => { e.preventDefault() } , false );

onselectstart = (e) => {
	e.preventDefault()
}

var x0 = null;
var move = 0;

function hold( e )
{
	x0 = unify( e ).clientX;
}


function release( e )
{
	move = unify(e).clientX - x0;
	x0 = null;

	if( move > 0 )
	{
		SlideShow( 'Carousel' , '-1' );
	} else {
		SlideShow( 'Carousel' , '+1' );
	}
}


function unify( e )
{
	return e.changedTouches ? e.changedTouches[0] : e;
}


function SlideShow( id , step )
{
	let Sliders = document.getElementById( id ).querySelectorAll( 'div.Slide' );
	let SlidersCount = Sliders.length - 1;

	if( step == '-1' )
	{
		Sliders[ SlidersCount ].classList.toggle( 'COff' );
		Sliders[ SlidersCount ].classList.toggle( 'COn' );
		document.getElementById( id ).insertBefore( Sliders[ SlidersCount ] , document.getElementById( id ).childNodes[ 0 ] );
		
		setTimeout( function(){
			Sliders[ SlidersCount ].classList.toggle( 'COff' );
			Sliders[ SlidersCount ].classList.toggle( 'COn' );
		} , 10 );


	} else {
		Sliders[ 0 ].classList.toggle( 'COff' );
		Sliders[ 0 ].classList.toggle( 'COn' );
		
		setTimeout( function(){
			document.getElementById( id ).appendChild( Sliders[ 0 ] );
			Sliders[ 0 ].classList.toggle( 'COff' );
			Sliders[ 0 ].classList.toggle( 'COn' );
		} , 1000 );
	
	}

}
