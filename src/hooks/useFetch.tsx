import { useState, useCallback } from "react";
import queryString from "query-string";

interface IhookOptions {
  request: any;
  path: string;
  obj: any;
}

const useFetch = () => {
  const [load, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(20);
  const [total, setTotal] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState<any>(null);
  const [id, setId] = useState<any>(null);
  const [, setCount] = useState(0);

  const makeRequest = useCallback(
    async (request: any, path: string, obj: any) => {
      setId(obj?.id);
      setLoading(true);
      setCount((prev) => prev + 1);
      const parsed: any = queryString.parse(path);

      try {
        const req = await request(path, obj);
        // console.log(req);
        if (req.status === 200) {
          setData(req.data);
          setSuccess(true);
          setLoading((prev) => !prev);
          setPageSize(parsed?.pageSize);
          setCurrentPage(parsed?.page);
          setTotal(req?.data?.length);
          return;
        }
        throw new Error();
      } catch (err: any) {
        setError(true);
        console.log(err);
        setErrorMessage("unexpected error");
        setLoading((prev) => !prev);
        setId(null);
      }
    },
    []
  );

  const action = ({ request, path, obj }: IhookOptions) => {
    makeRequest(request, path, obj);
  };

  return {
    error,
    errorMessage,
    success,
    load,
    data,
    id,
    currentPage,
    pageSize,
    total,
    action,
  };
};

export default useFetch;
