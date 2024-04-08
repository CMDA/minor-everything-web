const caro = document.querySelector("#impression > ul");
const caroTargets = caro.querySelectorAll("li");

const caroNav = document.querySelector("#impression nav");
const caroLinks = caroNav.querySelectorAll("a");

let caroWidth, caroScrollWidth, caroTargetWidth, caroOffsetLeft, caroScrollThreshold;

let reducedMotion = true;



// make matching link current 
const updateLink = targetLink => {
	// if present uncurrent current link
	const currentLink = caroNav.querySelector("a.current");

	if (currentLink) {
		currentLink.classList.remove("current");
	}

	// make new link current
	targetLink.classList.add("current");
}



// scroll to target in caro
const updateTarget = (target) => {
	// scroll or no scroll
	let scrollBehavior = "instant";

	if (reducedMotion == false) {
		scrollBehavior = "smooth";
	}

	// move it
	const targetLeft = target.offsetLeft;
	const scrollLeft = targetLeft - caroOffsetLeft;

	caro.scrollTo({
		left: scrollLeft,
		behavior: scrollBehavior,
	});
}


// determine sizes needed for calculations
const iniCaroSize = () => {
	const setCaroSize = () => {
		caroWidth = caro.offsetWidth;
		caroScrollWidth = caro.scrollWidth;
		caroTargetWidth = caroTargets[0].offsetWidth;
		caroOffsetLeft = (caroWidth - caroTargetWidth) / 2;
		caroScrollThreshold = caroTargetWidth / 4;
	}

	// update sizes after browser resize
	const resizeObserver = new ResizeObserver(() => {
		setCaroSize();
	});
	resizeObserver.observe(document.documentElement);

	// set sizes initially
	setCaroSize();
}



// determine reduced motion or not
const iniReducedMotion = () => {
	// watch the setting
	const mediaQuery = window.matchMedia(`(prefers-reduced-motion: reduce)`) == true || window.matchMedia(`(prefers-reduced-motion: reduce)`);

	// set ReducedMotion initially
	reducedMotion = mediaQuery.matches

	// update after change
	mediaQuery.addEventListener('change', () => {
		reducedMotion = mediaQuery.matches
	});
}



// set target and link initially
const iniCaroPos = () => {
	// start with first target and first link
	let target = caro.querySelector("li:first-child");
	let targetLink = caroNav.querySelector("li:first-child a");

	// if hash present in url
	const urlSelector = window.location.hash;

	if (urlSelector) {
		// if hash is of actual target
		urlTarget = caro.querySelector(urlSelector);

		if(urlTarget) {
			target = urlTarget;
			targetLink = caroNav.querySelector("a[href='"+urlSelector+"']");
		}
	}

	// set target and link 
	updateTarget(target);
	updateLink(targetLink);
}



// listen to clicks on links in nav
const iniCaroLinks = () => {
	const goToTarget = e => {
		e.preventDefault();
	
		// look for target
		const targetLink = e.currentTarget;
		const targetSelector = targetLink.hash;
		const target = caro.querySelector(targetSelector);
	
		// move to target
		updateTarget(target);
	}
	
	// listen
	caroLinks.forEach(caroLink => {
		caroLink.onclick = goToTarget;
	});
}


// listen to scroll to update current link
const iniCaroScroll = () => {
	const updateCaro = () => {
		const caroScrollLeft = caro.scrollLeft;
		let target, targetSelector, targetLink;

		// <= threshold for smoother scroll
		if (caroScrollLeft <= caroScrollThreshold) {
			target = caro.querySelector("li:first-child");
		}
		// <= threshold for smoother scroll
		else if (Math.abs( caroScrollWidth - caroWidth - caroScrollLeft ) <= caroScrollThreshold) {
			target = caro.querySelector("li:last-child");
		}
		else {
			caroTargets.forEach(caroTarget => {
				const caroTargetLeft = caroTarget.offsetLeft;
				// <= threshold for smoother scroll
				if (Math.abs( caroTargetLeft - caroScrollLeft - caroOffsetLeft ) <= caroScrollThreshold) {
					target = caroTarget;
				}
			});
		}

		if(target) {
			targetSelector = target.id;
			targetLink = caroNav.querySelector("a[href='#"+targetSelector+"']");

			updateLink(targetLink);
		}
	}

	caro.onscroll = updateCaro;
}


const iniCaro = () => {
	iniCaroSize();
	iniReducedMotion();
	iniCaroPos();
	iniCaroLinks();
	iniCaroScroll();
}


iniCaro();