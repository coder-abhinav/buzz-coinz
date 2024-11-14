type SetLoading = (loading: boolean) => void;
type PriceData = Record<string, number>;
type SetPrices = (
  prices: PriceData | ((prevPrices: PriceData) => PriceData)
) => void;

type AsyncFunction = (params: {
  setLoading: SetLoading;
  setPrices: SetPrices;
}) => () => void;

export const fetchPrices: AsyncFunction = ({ setLoading, setPrices }) => {
  const ws = new WebSocket(import.meta.env.VITE_API_ENDPOINT_DEV);

  ws.onmessage = (event) => {
    const message = JSON.parse(event.data);
    const { symbol, price } = message;
    setPrices((prevPrices) => ({
      ...prevPrices,
      [symbol]: price,
    }));
    setLoading(false);
  };

  // Cleanup WebSocket connection on component unmount
  return () => ws.close();
};
