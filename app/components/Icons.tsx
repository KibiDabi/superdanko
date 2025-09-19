import React from "react";

export type IconsProp = React.HTMLAttributes<SVGElement>;

export const Icons = {
  hamburgerMenu: ({ ...props }: IconsProp) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="#f3eeee"
      fill="none"
      {...props}
    >
      <path
        d="M4 5L16 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12L20 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 19L12 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  cart: (props: IconsProp) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="#f0e9e9"
      fill="none"
      {...props}
    >
      <path
        d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="10.5"
        cy="20.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="17.5"
        cy="20.5"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),
  peanut: (props: IconsProp) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      {...props}
    >
      <path
        d="M12 2C13.6569 2 15 3.34315 15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16C13.6569 16 15 17.3431 15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19C9 17.3431 10.3431 16 12 16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 12C8.65685 12 10 13.3431 10 15C10 16.6569 8.65685 18 7 18C5.34315 18 4 16.6569 4 15C4 13.3431 5.34315 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 6C18.6569 6 20 7.34315 20 9C20 10.6569 18.6569 12 17 12C15.3431 12 14 10.6569 14 9C14 7.34315 15.3431 6 17 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  pumpkin: (props: IconsProp) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="#f0e9e9"
      fill="none"
      {...props}
    >
      <path
        d="M16 18C16 20 14 22 12 22C10 22 8 20 8 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15 8C14.4012 6.8044 13.2819 6 12 6C10.7181 6 9.59883 6.8044 9 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15.4118 19.4077C19.6471 21.8019 22 16.4063 22 12.7038C22 9.00141 19.7754 6 17.0313 6C16.0946 6 14.9412 6.47885 14 7.43654"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8.58824 19.4077C4.35294 21.8019 2 16.4063 2 12.7038C2 9.00141 4.22456 6 6.9687 6C7.90542 6 9.05882 6.47885 10 7.43654"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 6C12 4.66667 12.6 2 15 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  plant: (props: IconsProp) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="#f0e9e9"
      fill="none"
      {...props}
    >
      <path
        d="M14.5 10.5C14.5 10.5 12 12.5 12 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 15H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 15L7.50938 18.5657C7.7433 20.2031 7.86026 21.0218 8.42419 21.5109C8.98812 22 9.81514 22 11.4692 22H12.5308C14.1849 22 15.0119 22 15.5758 21.5109C16.1397 21.0218 16.2567 20.2031 16.4906 18.5657L17 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.063 8.06301C11.3123 6.8137 11.3123 4.78815 10.063 3.53884C8.17794 1.65376 4.03078 2.03078 4.03078 2.03078C4.03078 2.03078 3.65376 6.17794 5.53884 8.06301C6.78815 9.31233 8.8137 9.31233 10.063 8.06301Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.8031 10.1969C15.874 11.2677 17.6102 11.2677 18.681 10.1969C20.2968 8.58109 19.9736 5.02638 19.9736 5.02638C19.9736 5.02638 16.4189 4.70322 14.8031 6.319C13.7323 7.38985 13.7323 9.12602 14.8031 10.1969Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 8.5C10 8.5 12 11 12 14.9993"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  sesame: (props: IconsProp) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="#f0e9e9"
      fill="none"
      {...props}
    >
      <path
        d="M5.05857 11.7421C6.97712 11.9781 8.73113 10.5535 8.97628 8.56018C9.22142 6.56689 6.93885 4.64584 7.76802 2C3.66477 2.59449 2.25056 5.90113 2.02862 7.70572C1.78348 9.69901 3.14003 11.5062 5.05857 11.7421Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7 20C5.07536 15.3242 4.76992 11.1941 5.13275 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.50786 17.6681C10.6828 20.0602 13.5206 20.7199 15.8463 19.1415C18.172 17.5631 18.5378 13.1898 22 11.6651C18.3054 7.57247 13.6971 9.04998 11.5916 10.4789C9.26587 12.0573 8.33296 15.276 9.50786 17.6681Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6 22C8.37778 17.9044 11.2644 15.43 14 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  flax: (props: IconsProp) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="#f0e9e9"
      fill="none"
      {...props}
    >
      <path
        d="M12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12C7.89543 12 7 12.8954 7 14C7 15.1046 7.89543 16 9 16C10.1046 16 11 15.1046 11 14C11 12.8954 10.1046 12 9 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 8C15.8954 8 15 8.89543 15 10C15 11.1046 15.8954 12 17 12C18.1046 12 19 11.1046 19 10C19 8.89543 18.1046 8 17 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18C11.8954 18 11 18.8954 11 20C11 21.1046 11.8954 22 13 22C14.1046 22 15 21.1046 15 20C15 18.8954 14.1046 18 13 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  mountain: (props: IconsProp) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="#f0e9e9"
      fill="none"
      {...props}
    >
      <path
        d="M16 20H2L5.22457 10.7557C6.79555 6.25189 7.58104 4 9 4C10.3373 4 11.1119 6 12.5116 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6 20H22L17.4066 12.6585C15.8806 10.2195 15.1176 9 14 9C12.8824 9 12.1194 10.2195 10.5934 12.6585L9.12837 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  honey: (props: IconsProp) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="#f0e9e9"
      fill="none"
      {...props}
    >
      <path
        d="M7.44828 3.5H6M20 3.5H11.5M11.5 2V5M7.44828 2V5M9.5 1V6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 9H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.6 9L13.8963 9.36014C14.938 10.626 15.4588 11.259 15.7294 12.0089C16 12.7589 16 13.5695 16 15.1906V18.3333C16 20.5332 16 21.6332 15.2971 22.3166C14.5941 23 13.4627 23 11.2 23H8.8C6.53726 23 5.40589 23 4.70294 22.3166C4 21.6332 4 20.5332 4 18.3333V15.1906C4 13.5695 4 12.7589 4.27058 12.0089C4.54117 11.259 5.062 10.626 6.10366 9.36014L6.4 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 15V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 15H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  oil: (props: IconsProp) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="#f0e9e9"
      fill="none"
      {...props}
    >
      <path
        d="M3 3C4.86377 3 5.79565 3 6.53073 3.30448C7.51085 3.71046 8.28954 4.48915 8.69552 5.46927C9 6.20435 9 7.13623 9 9C7.13623 9 6.20435 9 5.46927 8.69552C4.48915 8.28954 3.71046 7.51085 3.30448 6.53073C3 5.79565 3 4.86377 3 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M13 5C11.7575 5 11.1362 5 10.6462 5.20299C9.99277 5.47364 9.47364 5.99277 9.20299 6.64618C9 7.13623 9 7.75749 9 9C10.2425 9 10.8638 9 11.3538 8.79701C12.0072 8.52636 12.5264 8.00723 12.797 7.35382C13 6.86377 13 6.24251 13 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 9V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13 14L3 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13 17L3 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13 20L3 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M19 21C20.6569 21 22 19.6569 22 18C22 17.3038 21.7629 16.663 21.365 16.154C20.861 15.5093 20.609 15.1869 20.5545 15.0286C20.5 14.8704 20.5 14.6628 20.5 14.2478V10.5C20.5 9.67157 19.8284 9 19 9C18.1716 9 17.5 9.67157 17.5 10.5V14.2478C17.5 14.6628 17.5 14.8704 17.4455 15.0286C17.391 15.1869 17.139 15.5093 16.635 16.154C16.2371 16.663 16 17.3038 16 18C16 19.6569 17.3431 21 19 21Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  ),
  instagram: (props: IconsProp) => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9091 12.909C13.2365 12.5817 13.4918 12.1895 13.6588 11.7577C13.8195 11.3443 13.9294 10.8718 13.961 10.1799C13.9926 9.48665 14.0001 9.26529 14.0001 7.50001C14.0001 5.73473 13.9926 5.51328 13.961 4.82008C13.9294 4.12821 13.8195 3.65573 13.6588 3.24228C13.4956 2.80857 13.2398 2.41567 12.9091 2.091C12.5844 1.76028 12.1915 1.50437 11.7578 1.34113C11.3443 1.18056 10.8718 1.0707 10.1799 1.03924C9.48675 1.00748 9.26537 1 7.50006 1C5.73476 1 5.51333 1.00748 4.82014 1.03912C4.12826 1.0707 3.65578 1.18056 3.24233 1.34125C2.80862 1.50447 2.41573 1.76032 2.09105 2.09098C1.76032 2.41563 1.5044 2.80852 1.34113 3.24225C1.18056 3.65573 1.0707 4.12821 1.03924 4.82008C1.00748 5.51328 1 5.73471 1 7.50001C1 9.26532 1.00748 9.48675 1.03924 10.1799C1.07083 10.8718 1.18069 11.3443 1.34138 11.7577C1.5046 12.1915 1.76045 12.5843 2.09111 12.909C2.41578 13.2397 2.80867 13.4955 3.24238 13.6587C3.65586 13.8194 4.12834 13.9293 4.82019 13.9609C5.51348 13.9925 5.73483 14 7.50012 14C9.2654 14 9.48685 13.9925 10.18 13.9609C10.8719 13.9293 11.3444 13.8194 11.7578 13.6587C12.1896 13.4917 12.5818 13.2364 12.9091 12.909ZM1.99949 6.73496C1.99974 6.94524 2.00005 7.19543 2.00005 7.50002C2.00005 7.80461 1.99974 8.0548 1.99949 8.26507C1.99849 9.08596 1.99824 9.29856 2.01963 9.7655C2.04625 10.3509 2.07823 10.7811 2.17588 11.1053C2.26976 11.417 2.37505 11.7342 2.7188 12.1171C3.06255 12.4999 3.39411 12.6733 3.81645 12.8007C4.23879 12.928 4.7696 12.9554 5.23052 12.9764C5.75332 13.0003 5.96052 13.0002 7.05714 12.9999L7.50006 12.9999C7.79304 12.9999 8.03569 13.0001 8.2409 13.0004C9.08195 13.0013 9.29425 13.0015 9.76575 12.9799C10.3512 12.9533 10.7814 12.9213 11.1056 12.8237C11.4173 12.7298 11.7345 12.6245 12.1173 12.2807C12.5001 11.937 12.6735 11.6054 12.8009 11.1831C12.9283 10.7607 12.9557 10.2299 12.9767 9.76902C13.0005 9.24689 13.0004 9.04027 13.0002 7.94749V7.94738L13.0001 7.50039L13.0001 7.05747C13.0004 5.96085 13.0005 5.75365 12.9766 5.23085C12.9556 4.76993 12.9282 4.23912 12.8009 3.81678C12.6735 3.39445 12.5001 3.06288 12.1173 2.71913C11.7345 2.37538 11.4172 2.27009 11.1056 2.17621C10.7813 2.07856 10.3511 2.04658 9.76571 2.01996C9.29421 1.99836 9.08194 1.99859 8.24092 1.99951H8.24092C8.0357 1.99974 7.79305 2.00001 7.50006 2.00001L7.05704 1.99993C5.96051 1.99964 5.75331 1.99958 5.23052 2.02343C4.7696 2.04446 4.23879 2.07183 3.81645 2.19921C3.39411 2.32659 3.06255 2.49999 2.7188 2.88281C2.37505 3.26562 2.26976 3.58286 2.17588 3.89453C2.07823 4.21874 2.04625 4.64894 2.01963 5.23437C1.99824 5.70131 1.99849 5.91401 1.99949 6.73496ZM7.49996 5.25015C6.25741 5.25015 5.25012 6.25744 5.25012 7.49999C5.25012 8.74254 6.25741 9.74983 7.49996 9.74983C8.74251 9.74983 9.7498 8.74254 9.7498 7.49999C9.7498 6.25744 8.74251 5.25015 7.49996 5.25015ZM4.25012 7.49999C4.25012 5.70515 5.70512 4.25015 7.49996 4.25015C9.2948 4.25015 10.7498 5.70515 10.7498 7.49999C10.7498 9.29483 9.2948 10.7498 7.49996 10.7498C5.70512 10.7498 4.25012 9.29483 4.25012 7.49999ZM10.9697 4.7803C11.3839 4.7803 11.7197 4.44452 11.7197 4.0303C11.7197 3.61609 11.3839 3.2803 10.9697 3.2803C10.5555 3.2803 10.2197 3.61609 10.2197 4.0303C10.2197 4.44452 10.5555 4.7803 10.9697 4.7803Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  facebook: (props: IconsProp) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      color="#b6b6b6"
      {...props}
    >
      <path
        fill="currentColor"
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      />
    </svg>
  ),
  tiktok: (props: IconsProp) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="#f0e9e9"
      fill="none"
      {...props}
    >
      <path
        d="M9.5 22C12.8137 22 15.5 19.3137 15.5 16V8.24537C16.5006 9.04749 17.6981 9.61412 19.0085 9.86122C19.3589 9.92728 19.5341 9.96032 19.7502 9.90446C20.007 9.83809 20.2923 9.6016 20.4051 9.36157C20.5 9.15952 20.5 8.93968 20.5 8.5C20.5 8.04137 20.5 7.81205 20.4499 7.65983C20.3671 7.4079 20.2952 7.31049 20.079 7.15694C19.9483 7.06416 19.6395 6.96876 19.022 6.77796C17.4492 6.29199 16.208 5.05079 15.722 3.47798C15.5312 2.86045 15.4358 2.55169 15.3431 2.42104C15.1895 2.20479 15.0921 2.13294 14.8402 2.05007C14.6879 2 14.4586 2 14 2C13.5341 2 13.3011 2 13.1173 2.07612C12.8723 2.17761 12.6776 2.37229 12.5761 2.61732C12.5 2.80109 12.5 3.03406 12.5 3.5V16C12.5 17.6569 11.1569 19 9.5 19C7.84315 19 6.5 17.6569 6.5 16C6.5 14.8644 7.13101 13.8761 8.06154 13.3667C8.75264 12.9884 9.0982 12.7992 9.19494 12.7057C9.38565 12.5214 9.39434 12.5068 9.46444 12.251C9.5 12.1212 9.5 11.9141 9.5 11.5C9.5 11.0747 9.5 10.8621 9.39825 10.6541C9.28169 10.4159 8.96391 10.1689 8.70429 10.1147C8.47765 10.0674 8.32349 10.1067 8.01518 10.1851C5.41964 10.8459 3.5 13.1988 3.5 16C3.5 19.3137 6.18629 22 9.5 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  google: (props: IconsProp) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  apple: (props: IconsProp) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0,0,256,256"
      {...props}
    >
      <g
        fill="#ffffff"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      >
        <g transform="scale(10.66667,10.66667)">
          <path d="M15.9043,1.07813c-0.06094,-0.00937 -0.13008,-0.00352 -0.20508,0.02148c-1,0.2 -2.09883,0.8 -2.79883,1.5c-0.6,0.6 -1.09961,1.6 -1.09961,2.5c0,0.2 0.19844,0.40039 0.39844,0.40039c1.1,-0.1 2.20039,-0.70039 2.90039,-1.40039c0.6,-0.8 1.09961,-1.69961 1.09961,-2.59961c0,-0.225 -0.11211,-0.39375 -0.29492,-0.42187zM16.19922,5.40039c-1.8,0 -2.59883,1.09961 -3.79883,1.09961c-1.3,0 -2.5,-1 -4,-1c-2.1,0 -5.30078,1.99961 -5.30078,6.59961c-0.1,4.2 3.70039,8.90039 5.90039,8.90039c1.3,0 1.60039,-0.80078 3.40039,-0.80078c1.8,0 2.2,0.80078 3.5,0.80078c1.5,0 2.6,-1.60039 3.5,-2.90039c0.4,-0.7 0.7,-1.09922 1,-1.69922c0.2,-0.4 -0.00039,-0.8 -0.40039,-1c-2.6,-1.3 -3.09922,-5.5 -0.19922,-7c0.5,-0.3 0.59922,-0.90117 0.19922,-1.20117c-1.1,-1 -2.70078,-1.79883 -3.80078,-1.79883z"></path>
        </g>
      </g>
    </svg>
  ),
  spinner: (props: IconsProp) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  billing: (props: IconsProp) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="28"
      height="28"
      color="#ffffff"
      fill="none"
      {...props}
    >
      <path
        d="M3.3457 16.1976L16.1747 3.36866M18.6316 11.0556L16.4321 13.2551M14.5549 15.1099L13.5762 16.0886"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3.17467 16.1411C1.60844 14.5749 1.60844 12.0355 3.17467 10.4693L10.4693 3.17467C12.0355 1.60844 14.5749 1.60844 16.1411 3.17467L20.8253 7.85891C22.3916 9.42514 22.3916 11.9645 20.8253 13.5307L13.5307 20.8253C11.9645 22.3916 9.42514 22.3916 7.85891 20.8253L3.17467 16.1411Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 22H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};
