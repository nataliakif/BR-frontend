import Header from './Header/Header';
import { Chart } from './Chart/Chart';
export const App = () => {
  return (
    <>
      <Header />
      <Chart
        plan={30}
        actPages={[
          [40, 50, 50, 40],
          [35, 50, 20, 46],
        ]}
      />
    </>
  );
};
