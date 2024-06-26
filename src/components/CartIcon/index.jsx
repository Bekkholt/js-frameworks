export default function IonCartOutline(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 512 512"
      {...props}
    >
      <circle
        cx={176}
        cy={416}
        r={16}
        fill="none"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={25}
      ></circle>
      <circle
        cx={400}
        cy={416}
        r={16}
        fill="none"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={25}
      ></circle>
      <path
        fill="none"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={25}
        d="M48 80h64l48 272h256"
      ></path>
      <path
        fill="none"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={25}
        d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
      ></path>
    </svg>
  );
}
