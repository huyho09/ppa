import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import swagger-ui-react to avoid SSR issues
const SwaggerUI = dynamic(() => import('swagger-ui-react'), {
  ssr: false
});

const SwaggerPage = () => {
  const [swaggerSpec, setSwaggerSpec] = useState(null);

  useEffect(() => {
    // Define your Swagger JSON specification (you can use a remote URL or local file)
    const fetchSwaggerSpec = async () => {
      const res = await fetch('/swagger.json'); // Adjust the URL based on your setup
      const spec = await res.json();
      setSwaggerSpec(spec);
    };

    fetchSwaggerSpec();
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      {swaggerSpec ? (
        <SwaggerUI spec={swaggerSpec} />
      ) : (
        <p>Loading Swagger UI...</p>
      )}
    </div>
  );
};

export default SwaggerPage;
