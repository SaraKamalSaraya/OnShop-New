import type { SVGProps } from 'react';

const Bag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={24}
    viewBox="0 0 24 24"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.0865 7C18.3503 7 19.676 7.90964 20.1444 10.1201L20.9133 16.3147C21.4789 20.3535 19.2075 22 16.1585 22H7.86853C4.81062 22 2.46858 20.8629 3.1049 16.3147L3.88264 10.1201C4.28034 7.84597 5.65022 7 6.93171 7H17.0865ZM9.097 10.3293C8.60889 10.3293 8.21321 10.7366 8.21321 11.2389C8.21321 11.7413 8.60889 12.1486 9.097 12.1486C9.5851 12.1486 9.98079 11.7413 9.98079 11.2389L9.9739 11.1248C9.91936 10.6763 9.54755 10.3293 9.097 10.3293ZM14.8858 10.3293C14.3977 10.3293 14.002 10.7366 14.002 11.2389C14.002 11.7413 14.3977 12.1486 14.8858 12.1486C15.3739 12.1486 15.7696 11.7413 15.7696 11.2389C15.7696 10.7366 15.3739 10.3293 14.8858 10.3293Z"
      fill="currentColor"
    />
    <path
      d="M16.9739 6.77432C16.977 6.85189 16.9621 6.92913 16.9303 7H15.4932C15.4654 6.92794 15.4506 6.85153 15.4497 6.77432C15.4497 4.85682 13.8899 3.30238 11.9657 3.30238C10.0416 3.30238 8.48184 4.85682 8.48184 6.77432C8.49502 6.84898 8.49502 6.92535 8.48184 7H7.00989C6.9967 6.92535 6.9967 6.84898 7.00989 6.77432C7.12172 4.10591 9.32499 2 12.0049 2C14.6849 2 16.8882 4.10591 17 6.77432H16.9739Z"
      fill="currentColor"
      opacity={0.4}
    />
  </svg>
);

export default Bag;