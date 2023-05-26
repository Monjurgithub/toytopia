import React from 'react';
import PageTitle from '../../Shared/PageTitle';

const Blog = () => {
    return (
        <div className='my-28'>
            <PageTitle title="Blog"></PageTitle>
            <div className="collapse my-4">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium bg-gray-400  rounded-lg">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p>Access Token: An access token is a credential that grants a client permission to access protected resources on a server. It is usually issued by an authentication server  after the client successfully authenticates with valid credentials.
                        The client authenticates with the server using its credentials Like: username/password or client ID/client secret.
                    </p>
                </div>
            </div>
            <div className="collapse my-4">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium bg-gray-400  rounded-lg">
                    Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>SQL databases use structured query language (SQL) for querying and manipulating data. SQL offers a rich set of powerful querying capabilities, including complex joins, aggregations, and transactions.
                        NoSQL databases offer different query mechanisms, such as key-value, document-based, columnar, or graph-based queries. These databases often have a simpler query language tailored to the specific data model they support</p>
                </div>
            </div>
            <div className="collapse my-4">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium bg-gray-400  rounded-lg">

                    What is express js? What is Nest JS?
                </div>
                <div className="collapse-content">
                    <p>Express.js is a minimalistic web application framework for Node.js, providing a simple and flexible way to build web applications and APIs. Nest.js is a progressive, opinionated framework for building efficient and scalable server-side applications. It is built with TypeScript and incorporates concepts from Angular, making it easy to develop maintainable and modular applications.</p>
                </div>
            </div>
            <div className="collapse my-4">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium bg-gray-400  rounded-lg">
                    What is MongoDB aggregate and how does it work?
                </div>
                <div className="collapse-content">
                    <p>In MongoDB, the aggregate function is used to perform advanced data analysis and manipulation operations on collections of documents. The pipeline stages are executed in order, with each stage operating on the results of the previous stage.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;