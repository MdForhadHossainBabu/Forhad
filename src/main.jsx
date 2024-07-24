import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Route/Route';
import AnimatedCursor from 'react-animated-cursor';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <div className="max-w-screen-2xl mx-auto">
      <RouterProvider router={router} />
      <AnimatedCursor
        innerSize={12}
        outerSize={8}
        color="0,234,255"
        outerAlpha={0.6}
        innerScale={0.2}
        outerScale={7}
        clickables={[
          'p',
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          'img',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'CountUp',
          {
            target: '.custom',
            options: {
              innerSize: 24,
              outerSize: 24,
              // color: '255, 255, 255',
              color: 'ffff',
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 12,
            },
          },
        ]}
      />
    </div>
  </HelmetProvider>
);
