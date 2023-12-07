import { useEffect } from "react";
import { useRef } from "react";

export const useTitle = (title) => {
  const documentDefined = typeof document !== 'undefined';
  const originalTitle = useRef(documentDefined ? document.title : null);

  useEffect(() => {
    if (!documentDefined) return;

    if (document.title !== title) document.title = title;

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      document.title = originalTitle.current;
    };
  }, [documentDefined,title]);
};

