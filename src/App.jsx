import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';
import Pages from './pages';

function App() {
  return (
    // maybe we can use the withErrorBoundary hoc if we would decide to implement custom errors for pages
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Pages />
    </ErrorBoundary>
  );
}

export default App;
