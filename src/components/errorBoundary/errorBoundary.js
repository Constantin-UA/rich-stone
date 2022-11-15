import { Component } from 'react';
import { ErrorPage } from '../pages';
class ErrorBoundary extends Component {
	state = {
		error: false,
	};

	componentDidCatch(error, errorInfo) {
		console.log(error, errorInfo);
		this.setState({ error: true });
	}

	render() {
		if (this.state.error) {
			return <ErrorPage />;
		}
		return this.props.children;
	}
}
export default ErrorBoundary;
