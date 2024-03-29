const Drawer = () => {
  return (
    <div className="drawer drawer-end z-[1]">
      {/* Checkbox input for toggling the drawer */}
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      {/* Main content area */}
      <div className="drawer-content">{/* Page content here */}</div>
      {/* Sidebar */}
      <div className="drawer-side">
        {/* Overlay to close the sidebar */}
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
