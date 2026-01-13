export default function CompanyLogo() {
  return (
    <svg
      className="h-full"
      viewBox="0 0 500 500"
    >
      <circle
        cx="250"
        cy="250"
        r="230"
        className="stroke-primary fill-none stroke-3"
      />

      <circle
        cx="250"
        cy="250"
        r="200"
        className="stroke-map-clickable fill-none stroke-2"
      />

      <path id="topTextPath" d="M 90 250 A 160 160 0 0 1 410 250" fill="none" />
      <text
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="28"
        letterSpacing="3"
        className="fill-primary"
      >
        <textPath href="#topTextPath" startOffset="50%" textAnchor="middle">
          PRIVATE ESTATE
        </textPath>
      </text>

      <path
        id="bottomTextPath"
        d="M 410 250 A 160 160 0 0 1 90 250"
        fill="none"
      />
      <text
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="22"
        letterSpacing="2"
        className="fill-primary"
      >
        <textPath href="#bottomTextPath" startOffset="50%" textAnchor="middle">
          NETWORK
        </textPath>
      </text>

      <text
        x="250"
        y="270"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="96"
        className="fill-primary"
        letterSpacing="4"
      >
        PEN
      </text>
    </svg>
  );
}
