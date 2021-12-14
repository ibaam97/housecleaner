import { restRequest } from "./config";

export const makePayment = async ({ token, id }) => {
  const res = await restRequest("post", "paymentsApi", `/payments/pay/${id}`, {
    source: token.id,
  });
  return res;
};
