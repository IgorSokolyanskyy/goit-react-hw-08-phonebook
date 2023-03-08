import { RotatingLines } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div
      style={{
        position: 'absolute',
        top: ' 50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <RotatingLines
        type="Watch"
        strokeColor="#00a226"
        height={100}
        width={100}
      />
    </div>
  );
}
