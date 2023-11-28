import { IconProps } from '@/components/icons';

const LikeIcon = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
      <path
        d="M7.5 11V19C7.5 19.5523 7.05228 20 6.5 20H4.5C3.94772 20 3.5 19.5523 3.5 19V12C3.5 11.4477 3.94772 11 4.5 11H7.5C9.70914 11 11.5 9.20914 11.5 7V6C11.5 4.89543 12.3954 4 13.5 4C14.6046 4 15.5 4.89543 15.5 6V11H18.5C19.6046 11 20.5 11.8954 20.5 13L19.5 18C19.2046 19.2603 18.3892 20.0756 17.5 20H10.5C8.84315 20 7.5 18.6569 7.5 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 11V19C7.5 19.5523 7.05228 20 6.5 20H4.5C3.94772 20 3.5 19.5523 3.5 19V12C3.5 11.4477 3.94772 11 4.5 11H7.5C9.70914 11 11.5 9.20914 11.5 7V6C11.5 4.89543 12.3954 4 13.5 4C14.6046 4 15.5 4.89543 15.5 6V11H18.5C19.6046 11 20.5 11.8954 20.5 13L19.5 18C19.2046 19.2603 18.3892 20.0756 17.5 20H10.5C8.84315 20 7.5 18.6569 7.5 17"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LikeIcon;
