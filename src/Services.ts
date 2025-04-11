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
  const url = import.meta.env.VITE_WEB_SOCKET_API_ENDPOINT_DEV + "prices";

  const ws = new WebSocket(url);

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
