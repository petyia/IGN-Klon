const root = document.documentElement;
const mainButton = document.querySelector(".main-button");
const headerContainer = document.querySelector(".header-container");

const listItems = ["Tovább"];

const setDropdownProps = (deg, ht, opacity) => {
  root.style.setProperty("--rotate-arrow", deg !== 0 ? deg + "deg" : 0);
  root.style.setProperty("--dropdown-height", ht !== 0 ? ht + "rem" : 0);
  root.style.setProperty("--list-opacity", opacity);
};

mainButton.addEventListener("mouseenter", () => {
  const listWrapperSizes = 3.5; // margins, paddings & borders
  const dropdownOpenHeight = 4.6 * listItems.length + listWrapperSizes;
  const currDropdownHeight =
    root.style.getPropertyValue("--dropdown-height") || "0";

  currDropdownHeight === "0"
    ? setDropdownProps(180, dropdownOpenHeight, 1)
    : setDropdownProps(0, 0, 0);
});

mainButton.addEventListener("mouseleave", () => {
  const listWrapperSizes = 3.5; // margins, paddings & borders
  const dropdownOpenHeight = 4.6 * listItems.length + listWrapperSizes;
  const currDropdownHeight =
    root.style.getPropertyValue("--dropdown-height") || "0";

  currDropdownHeight === "0"
    ? setDropdownProps(360, dropdownOpenHeight, 1)
    : setDropdownProps(0, 0, 0);
});
