import "./menu.scss";

const menuArrows = [
  'home',
  'portfolio',
  'works',
  'contact'
];

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        {menuArrows.map((menuArrow) => {
          return (
            <li key={menuArrow} onClick={()=>setMenuOpen(false)}>
              <a href={`#${menuArrow}`}>{menuArrow}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}