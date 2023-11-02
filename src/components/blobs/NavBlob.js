const NavBlob = () => {
  return (
    <div style={{ display: "grid", alignItems: "center" }}>
      <div
        style={{ width: "100vw", height: "50px", backgroundColor: "#ddb6a3" }}
      ></div>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ borderTop: "5px solid #ddb6a3" }}
      >
        <path
          d="M0,0V30C0,90,300,60,600,70S1200,90,1200,30V0Z"
          className="shape-fill"
        ></path>
      </svg>
    </div>
  );
};

export default NavBlob;
