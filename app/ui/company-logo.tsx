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
        font-family="Georgia, 'Times New Roman', serif"
        font-size="28"
        letter-spacing="3"
        className="fill-primary"
      >
        <textPath href="#topTextPath" startOffset="50%" text-anchor="middle">
          ESTATE SERVICES
        </textPath>
      </text>

      <path
        id="bottomTextPath"
        d="M 410 250 A 160 160 0 0 1 90 250"
        fill="none"
      />
      <text
        font-family="Georgia, 'Times New Roman', serif"
        font-size="22"
        letter-spacing="2"
        className="fill-primary"
      >
        <textPath href="#bottomTextPath" startOffset="50%" text-anchor="middle">
          COLLECTIVE
        </textPath>
      </text>

      <text
        x="250"
        y="270"
        text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="96"
        className="fill-primary"
        letter-spacing="4"
      >
        ESC
      </text>
    </svg>
  );
}
