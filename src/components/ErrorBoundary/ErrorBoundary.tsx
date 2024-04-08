import React, { Component, ErrorInfo } from 'react';

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }
    error: string | null = null
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error: ', error, errorInfo);
        this.setState({ hasError: true });
        this.error = error.message + error.stack
    }

    render() {
        if (this.state.hasError) {
            return <div className='box'>
                <pre>{this.error}</pre>
            </div>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;