
export default function VerifiedBadge({ size = 84 }) {
  return (
    <div
      className="inline-flex items-center justify-center"
      style={{ width: size, height: size }} 
    >
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        aria-hidden="true"
      >
        <defs>
       
          <mask id="cut-check">
            <rect width="100" height="100" fill="white" />
            <path
              d="M28 52 L45 69 L73 41"
              stroke="black"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </mask>
        </defs>

       
        <polygon
          points="
            72.5,11.0 72.6,27.4 89.0,27.5 80.9,41.7 95.0,50.0
            80.9,58.3 89.0,72.5 72.6,72.6 72.5,89.0 58.3,80.9
            50.0,95.0 41.7,80.9 27.5,89.0 27.4,72.6 11.0,72.5
            19.1,58.3 5.0,50.0 19.1,41.7 11.0,27.5 27.4,27.4
            27.5,11.0 41.7,19.1 50.0,5.0 58.3,19.1
          "
          fill="#10b981"           
          mask="url(#cut-check)"   
        />
      </svg>
    </div>
  );
}
