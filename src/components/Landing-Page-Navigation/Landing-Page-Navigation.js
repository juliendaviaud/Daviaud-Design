import React, { useRef, useState } from "react";
import "./Landing-Page-Navigation.css";
import { Link as NavigationLinkScroll } from "react-scroll";

const LandingPageNavigation = () => {
  const [linkTable, setlinkTable] = useState([
    "#landing",
    "#reliability",
    "#projects",
    "#pricesPacks",
    "#skills",
    "#contact",
  ]);
  const [activeDot, setActiveDot] = useState(0);
  console.log(activeDot);

  /* const anchor1 = useRef(null);
	const anchor2 = useRef(null);
	const anchor3 = useRef(null);
	const anchor4 = useRef(null);
	const anchor5 = useRef(null);
	const anchor6 = useRef(null); */

  const anchors = [
    {
      id: 0,
      name: "Landing Section",
      key: "landing",
    },
    {
      id: 1,
      name: "Three Arguments",
      key: "reliability",
    },
    {
      id: 2,
      name: "Projects",
      key: "projects",
    },
    {
      id: 3,
      name: "Prices Packs",
      key: "pricesPacks",
    },
    {
      id: 4,
      name: "Skills",
      key: "skills",
    },
    {
      id: 5,
      name: "Contact",
      key: "contact",
    },
  ];

  const changeSelectedDot = (e, id) => {
    /* activeDot.current.classList.remove("active-dot"); */
    /* console.log(activeDot.current);
		e.target.classList.add("active-dot");
		setActiveDot(e.target.ref); */
    e.stopPropagation();
    setActiveDot(id);
  };

  const nextDotLink = () => {
    /* e.stopPropagation(); */
    /* e.preventDefault(); */
    if (activeDot === 5) {
      setActiveDot(0);
      /* console.log(activeDot); */
    } else {
      setActiveDot(activeDot + 1);
      /* console.log(activeDot + " + 1"); */
    }
    /* e.target.href("#" + activeDot); */
    /* console.log(e.target.href) */
  };

  const displayLinks = anchors.map((anchor) => {
    return (
      
      <NavigationLinkScroll
        key={anchor.id}
        to={anchor.key}
        offset={-150}
        spy={true}
        smooth={true}
        duration={500}
        onClick={(e) => changeSelectedDot(e, anchor.id)}
      >
        <li
          className={anchor.id === activeDot ? "active-dot" : ""}
        ></li>
      </NavigationLinkScroll>
    );
  });
  /* className={selectedIndex === index ? 'active-dot' : null} */

  return (
    <div className="landing-page-navigation">
      <NavigationLinkScroll
        className="next-button"
        to={anchors[activeDot + 1]?.key === undefined ? anchors[0].key : anchors[activeDot + 1].key}
        onClick={nextDotLink}
        offset={-150}
        spy={true}
        smooth={true}
        duration={500}
      >{/* {anchors[activeDot + 1].key} */}
      
        SUIVANT
      </NavigationLinkScroll>
      <div className="navigation-dots">
        <ul>
          {/* <li onClick={goToSection}><a href="#"></a></li>
				<li><a href="#"></a></li>
				<li><a href="#"></a></li>
				<li><a href="#"></a></li>
				<li><a href="#"></a></li>
				<li><a href="#"></a></li> */}
          {/* <a href="#landing" onClick={changeSelectedDot}><li ref={anchor1} className='active-dot'></li></a>
				<a href="#landing" onClick={changeSelectedDot}><li ref={anchor2}></li></a>
				<a href="#landing" onClick={changeSelectedDot}><li ref={anchor3}></li></a>
				<a href="#landing" onClick={changeSelectedDot}><li ref={anchor4}></li></a>
				<a href="#landing" onClick={changeSelectedDot}><li ref={anchor5}></li></a>
				<a href="#landing" onClick={changeSelectedDot}><li ref={anchor6}></li></a> */}
          {displayLinks}
        </ul>
      </div>
      {/* {console.log(anchors[activeDot].key)} */}
    </div>
  );
};

export default LandingPageNavigation;
