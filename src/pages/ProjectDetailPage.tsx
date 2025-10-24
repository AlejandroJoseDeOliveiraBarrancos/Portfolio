import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetailPage.css';

interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  articleContent: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const projectDetails: { [key: string]: ProjectDetail } = {
    'chanchito-tools': {
      id: 'chanchito-tools',
      title: 'ChanchitoTools',
      subtitle: 'Open Source Development Tools Collection',
      description: 'A comprehensive collection of open-source development tools and utilities.',
      longDescription: 'ChanchitoTools is a comprehensive collection of open-source development tools and utilities designed to help developers learn, experiment, and build amazing applications with modern technologies. The project features Firebase Web Client, Testing Abstractions for .NET, Command Management system, and Context Engineering toolkit for AI prompt optimization.',
      technologies: ['Open Source', 'C#', 'JavaScript', 'Firebase', 'Testing', 'AI Tools', '.NET', 'TypeScript'],
      articleContent: `ChanchitoTools represents a significant milestone in my journey as a developer and open-source contributor. This comprehensive collection of development utilities emerged from a simple yet powerful vision: to create tools that would genuinely help fellow developers learn, experiment, and build amazing applications with modern technologies.

The project began as a response to the fragmented nature of development tooling in the .NET ecosystem. I noticed that while there were excellent individual libraries available, there was a lack of cohesive, well-documented collections that developers could rely on for common tasks. This observation led to the creation of *ChanchitoTools*, a carefully curated suite of utilities that addresses real-world development challenges.

**The Foundation: Testing Abstractions**

One of the most critical components of ChanchitoTools is the *Testing Abstractions* library for .NET applications. This wasn't just another testing framework—it was designed to solve the specific pain points I encountered while working on enterprise-level applications. The library provides robust testing utilities, abstractions, and helpers that streamline the testing workflow, featuring test data builders, custom assertions, database testing support, and integration testing infrastructure.

The testing abstractions eliminate the repetitive boilerplate code that often plagues test suites, allowing developers to focus on what truly matters: writing meaningful tests that ensure code quality and reliability. By providing pre-built patterns for common testing scenarios, the library significantly reduces the time spent on test setup and maintenance.

**Command Management Excellence**

The *Command Management* system represents another cornerstone of the collection. This reusable command management system for .NET applications includes dependency injection support, multiple command execution capabilities, command groups, built-in logging, environment safety checks, and seamless integration with ASP.NET Core applications.

What makes this system particularly valuable is its emphasis on *environment safety*. In production environments, certain commands can be dangerous or destructive. The system includes built-in safeguards that prevent accidental execution of potentially harmful operations, while still providing the flexibility needed for development and testing scenarios.

**Firebase Integration Made Simple**

The *Firebase Web Client* component addresses the complexity often associated with Firebase authentication in web applications. This lightweight, client-side only web application demonstrates Firebase authentication methods and identity token retrieval in a clean, understandable way. Rather than overwhelming developers with complex configurations, it provides a straightforward implementation that can serve as both a learning resource and a production-ready starting point.

**AI-Powered Content Engineering**

Perhaps the most innovative aspect of ChanchitoTools is the *Context Engineering* toolkit for AI prompt optimization. In an era where AI tools are becoming increasingly important for content generation and development assistance, this toolkit provides comprehensive strategies for crafting effective AI prompts and content generation approaches.

The toolkit transforms technical questions into engaging, emotionally-resonant narratives optimized for social media platforms, featuring storytelling frameworks, multi-platform support, and ready-to-use AI prompt templates. This isn't just about generating content—it's about understanding how to communicate complex technical concepts in ways that resonate with different audiences.

**Impact and Community Contribution**

The success of ChanchitoTools extends beyond its technical capabilities. As an open-source project, it has fostered a community of developers who contribute, learn, and grow together. Each tool in the collection includes comprehensive documentation, clear setup instructions, and production-ready code that developers can use as a starting point for their own projects.

The project demonstrates my commitment to making financial technology and development tools accessible and easy to understand. By sharing knowledge and tools openly, ChanchitoTools contributes to the broader developer community's growth and helps create better applications across various industries.

**Technical Excellence and Future Vision**

From a technical perspective, ChanchitoTools showcases proficiency across multiple technologies and paradigms. The combination of C#, JavaScript, Firebase, and modern development practices demonstrates versatility and deep understanding of both backend and frontend development challenges.

Looking forward, ChanchitoTools continues to evolve, with new tools and utilities being added based on community feedback and emerging development needs. The project serves as both a practical resource for developers and a testament to the power of open-source collaboration in advancing the field of software development.`,
      githubUrl: 'https://github.com/ChanchitoFinance/ChanchitoTools'
    },
    'pixpro-platform': {
      id: 'pixpro-platform',
      title: 'PixPro Image Processing Platform',
      subtitle: 'Complete Full-Stack Image Processing Ecosystem',
      description: 'A comprehensive image processing platform with modular RESTful API, Angular frontend, and event-driven architecture.',
      longDescription: 'PixPro is a complete image processing ecosystem featuring a modular RESTful API backend, Angular frontend, and event-driven architecture. The platform supports real-time collaboration, AI-powered image processing, and scalable infrastructure with Docker containerization.',
      technologies: ['Angular', 'JavaScript', 'Clean Architecture', 'Event-Driven', 'AI Processing', 'Docker', 'RESTful API', 'TypeScript'],
      articleContent: `PixPro represents a comprehensive solution to modern image processing challenges, combining cutting-edge technologies with robust architectural patterns to deliver a scalable, maintainable platform. This project emerged from the need to create a unified ecosystem where image processing capabilities could be seamlessly integrated into various applications and workflows.

**Architectural Foundation**

The foundation of PixPro lies in its *Clean Architecture* implementation, which ensures separation of concerns and maintainability. The modular RESTful API backend provides a solid foundation for all image processing operations, while the Angular frontend delivers an intuitive user experience. This architectural approach allows for independent scaling of different components and facilitates future enhancements.

The *event-driven architecture* plays a crucial role in PixPro's scalability. By implementing asynchronous processing patterns, the platform can handle multiple image processing requests simultaneously without blocking user interactions. This approach is particularly important when dealing with computationally intensive AI-powered image transformations.

**Real-Time Collaboration Features**

One of PixPro's most innovative features is its real-time collaboration capabilities. Users can work together on image processing projects, with changes being synchronized across all connected clients in real-time. This functionality leverages modern web technologies to create a seamless collaborative experience that rivals desktop applications.

The implementation of real-time features required careful consideration of data consistency and conflict resolution. By implementing robust synchronization mechanisms, PixPro ensures that collaborative sessions remain stable even with multiple users making simultaneous changes.

**AI-Powered Processing**

The integration of AI-powered image processing capabilities sets PixPro apart from traditional image editing tools. The platform leverages machine learning models to provide intelligent image enhancement, automatic object detection, and content-aware transformations. These features are seamlessly integrated into the user workflow, making advanced image processing accessible to users of all skill levels.

The AI processing pipeline is designed to be extensible, allowing for the integration of new models and capabilities as they become available. This forward-thinking approach ensures that PixPro remains at the forefront of image processing technology.

**Scalable Infrastructure**

PixPro's infrastructure is built with scalability in mind. Docker containerization ensures consistent deployment across different environments, while the modular architecture allows for horizontal scaling of individual components. This approach provides the flexibility needed to handle varying workloads and user demands.

The platform's infrastructure monitoring and logging capabilities provide insights into system performance and user behavior, enabling continuous optimization and improvement of the user experience.

**Technical Excellence**

From a technical perspective, PixPro showcases proficiency in modern web development technologies and patterns. The combination of TypeScript, Angular, and Node.js creates a robust full-stack solution that leverages the strengths of each technology while maintaining code quality and developer productivity.

The project demonstrates advanced understanding of software architecture principles, API design, and user experience considerations. The result is a platform that not only meets current requirements but is also positioned for future growth and enhancement.`,
      githubUrl: 'https://github.com/AlejandroJoseDeOliveiraBarrancos/pixpro-service'
    },
    'workers-api': {
      id: 'workers-api',
      title: 'Employee Vacation Management System',
      subtitle: 'WorkersAPI - RESTful Employee Management',
      description: 'A RESTful API for managing employee vacation requests in a company.',
      longDescription: 'WorkersAPI is a comprehensive RESTful API system designed for managing employee vacation requests and HR operations. Built with TypeScript and modern backend practices, it provides a robust foundation for employee management systems.',
      technologies: ['TypeScript', 'RESTful API', 'Employee Management', 'Backend Development', 'Node.js', 'Express'],
      articleContent: `WorkersAPI represents a comprehensive solution for modern HR management challenges, providing a robust RESTful API system designed specifically for managing employee vacation requests and related HR operations. This project demonstrates proficiency in backend development, API design, and enterprise-level system architecture.

**System Architecture**

The WorkersAPI system is built with TypeScript, leveraging modern backend development practices to ensure type safety, maintainability, and scalability. The API follows RESTful principles, providing intuitive endpoints for all employee management operations while maintaining consistency and predictability in the interface design.

The architecture emphasizes separation of concerns, with clear boundaries between data access, business logic, and presentation layers. This approach ensures that the system remains maintainable and extensible as requirements evolve and new features are added.

**Employee Management Capabilities**

The core functionality of WorkersAPI revolves around comprehensive employee management capabilities. The system handles employee registration, profile management, and vacation request processing with built-in validation and approval workflows. This functionality addresses real-world HR challenges while providing a foundation for more complex organizational needs.

The vacation management system includes sophisticated features such as request tracking, approval workflows, and conflict detection. These capabilities ensure that HR departments can efficiently manage employee time-off requests while maintaining compliance with organizational policies and labor regulations.

**API Design Excellence**

The API design demonstrates a deep understanding of RESTful principles and modern API development best practices. Each endpoint is carefully designed to provide clear, consistent responses while maintaining security and performance standards. The API includes comprehensive error handling, input validation, and response formatting that ensures reliable integration with frontend applications.

The system includes robust authentication and authorization mechanisms, ensuring that sensitive employee data remains secure while providing appropriate access levels for different user roles within the organization.

**Technical Implementation**

From a technical perspective, WorkersAPI showcases advanced backend development skills, including database design, API architecture, and system integration patterns. The use of TypeScript ensures type safety throughout the development process, reducing runtime errors and improving code maintainability.

The project demonstrates proficiency in modern Node.js development, including middleware implementation, error handling, and performance optimization techniques. These technical foundations ensure that the system can handle enterprise-level workloads while maintaining responsiveness and reliability.

**Future Considerations**

The WorkersAPI system is designed with extensibility in mind, providing a solid foundation for additional HR management features. The modular architecture allows for easy integration of new capabilities such as performance management, training tracking, and advanced reporting features.

This project represents a significant contribution to enterprise software development, providing a practical solution to real-world HR management challenges while demonstrating technical excellence and architectural sophistication.`,
      githubUrl: 'https://github.com/AlejandroJoseDeOliveiraBarrancos/WorkersAPI'
    },
    'qatu-platform': {
      id: 'qatu-platform',
      title: 'Q\'atu Retail Platform',
      subtitle: 'Complete E-commerce Solution',
      description: 'A comprehensive retail platform with .NET Core API backend and JavaScript frontend.',
      longDescription: 'Q\'atu is a comprehensive retail platform featuring a .NET Core API backend and JavaScript frontend. The platform provides modern authentication, inventory management, and scalable architecture designed for retail operations and e-commerce functionality.',
      technologies: ['C#', '.NET Core', 'JavaScript', 'E-commerce', 'Retail', 'API', 'Frontend', 'Backend'],
      articleContent: `Q'atu represents a comprehensive e-commerce solution designed to address the complex needs of modern retail operations. This full-stack platform combines the power of .NET Core backend services with an intuitive JavaScript frontend to deliver a seamless shopping experience for both customers and administrators.

**Platform Architecture**

The Q'atu platform is built on a robust .NET Core API backend that provides comprehensive e-commerce functionality. This backend handles everything from user authentication and product management to order processing and inventory tracking. The architecture is designed for scalability, ensuring that the platform can grow with business needs while maintaining performance and reliability.

The JavaScript frontend provides an intuitive user interface that makes it easy for customers to browse products, manage their accounts, and complete purchases. The responsive design ensures that the platform works seamlessly across desktop and mobile devices, providing a consistent experience regardless of how users access the platform.

**E-commerce Capabilities**

Q'atu includes comprehensive e-commerce functionality that covers all aspects of online retail operations. The platform supports product catalog management, shopping cart functionality, secure payment processing, and order management. These features are designed to work together seamlessly, providing a complete solution for online retail businesses.

The inventory management system ensures that product availability is accurately tracked and updated in real-time. This prevents overselling and helps maintain customer satisfaction by ensuring that orders can be fulfilled promptly and accurately.

**Security and Authentication**

Security is a top priority in the Q'atu platform. The system includes modern authentication mechanisms that protect user accounts and sensitive information. The backend implements robust security measures including data encryption, secure API endpoints, and comprehensive input validation.

The platform also includes role-based access control, ensuring that different types of users have appropriate access to different features and information. This is particularly important for retail operations where administrators need access to sensitive business data while customers need secure access to their personal information.

**Scalable Design**

The Q'atu platform is designed with scalability in mind. The modular architecture allows for easy expansion of functionality as business needs evolve. The backend services can be scaled independently, ensuring that the platform can handle increased load without compromising performance.

This scalable design makes Q'atu suitable for businesses of all sizes, from small startups to large enterprises. The platform can grow with the business, providing the flexibility needed to adapt to changing market conditions and customer demands.

**Technical Excellence**

From a technical perspective, Q'atu demonstrates proficiency in modern web development technologies and practices. The combination of .NET Core and JavaScript creates a robust full-stack solution that leverages the strengths of both technologies while maintaining code quality and developer productivity.

The project showcases advanced understanding of e-commerce requirements, API design, and user experience considerations. The result is a platform that not only meets current retail needs but is also positioned for future growth and enhancement.`,
      githubUrl: 'https://github.com/AlejandroJoseDeOliveiraBarrancos/qatu-service'
    },
    'uno-game-platform': {
      id: 'uno-game-platform',
      title: 'Uno Game Platform',
      subtitle: 'Multiplayer Card Game System',
      description: 'A complete Uno game implementation with backend service and frontend SPA.',
      longDescription: 'A complete Uno game implementation featuring a backend service built with vanilla JavaScript and dependency injection, plus a monolithic SPA frontend with Component-Driven Architecture and Feature-Driven design patterns.',
      technologies: ['JavaScript', 'SPA', 'Game Development', 'Component Architecture', 'Dependency Injection', 'Frontend', 'Backend'],
      articleContent: `The Uno Game Platform represents a comprehensive implementation of the classic card game, showcasing advanced game development techniques and modern web architecture patterns. This project demonstrates proficiency in real-time multiplayer game development, component-driven architecture, and complex state management.

**Game Architecture**

The Uno Game Platform is built using a sophisticated architecture that separates concerns between game logic and user interface. The backend service, built with vanilla JavaScript and dependency injection patterns, handles all game state management, rule enforcement, and player interactions. This approach ensures that game logic remains consistent and reliable regardless of client-side implementation details.

The frontend is implemented as a monolithic Single Page Application (SPA) using Component-Driven Architecture principles. This design pattern ensures that each game feature is encapsulated in its own component, making the codebase maintainable and extensible while providing a seamless user experience.

**Multiplayer Implementation**

One of the most challenging aspects of this project was implementing real-time multiplayer functionality. The platform supports multiple players joining the same game session, with all game actions synchronized across all connected clients. This requires careful management of game state and conflict resolution to ensure that all players see the same game progression.

The multiplayer implementation includes sophisticated features such as player turn management, card distribution, and real-time updates. These features work together to create an engaging multiplayer experience that rivals traditional desktop game implementations.

**Component-Driven Development**

The frontend architecture emphasizes Component-Driven Development (CDD) principles, where each game feature is implemented as an independent, reusable component. This approach provides several benefits including improved maintainability, easier testing, and better code organization.

Each component is responsible for a specific aspect of the game interface, such as the card hand display, game board, or player information panel. This modular approach makes it easy to modify individual features without affecting the rest of the application.

**Game Logic Implementation**

The game logic implementation demonstrates deep understanding of the Uno game rules and mechanics. The backend service handles complex scenarios such as special card effects, turn skipping, and win condition detection. This implementation ensures that the game behaves exactly like the traditional card game while providing the benefits of digital implementation.

The game state management system tracks all aspects of the game including player hands, discard pile, current turn, and game progress. This comprehensive state management ensures that the game can be paused, resumed, or reconnected without losing any important information.

**Technical Excellence**

From a technical perspective, the Uno Game Platform showcases proficiency in modern JavaScript development, architectural patterns, and game development principles. The use of dependency injection in the backend ensures loose coupling and high testability, while the component-driven frontend provides excellent user experience and maintainability.

The project demonstrates advanced understanding of real-time communication, state synchronization, and user interface design. The result is a platform that provides an engaging and reliable multiplayer gaming experience while maintaining high code quality and architectural sophistication.`,
      githubUrl: 'https://github.com/AlejandroJoseDeOliveiraBarrancos/unogame-service'
    },
    'space-invaders-game': {
      id: 'space-invaders-game',
      title: 'Space Invaders Game',
      subtitle: 'Cross-Platform Game with Uno Platform',
      description: 'A space invaders game implementation using Uno Platform Foundation and MVVM model.',
      longDescription: 'A space invaders game implementation using Uno Platform Foundation and MVVM architectural pattern. This project demonstrates cross-platform game development capabilities and modern architectural patterns for game applications.',
      technologies: ['C#', 'Uno Platform', 'MVVM', 'Game Development', 'Cross-Platform', 'XAML', 'UWP'],
      articleContent: `The Space Invaders Game represents a modern implementation of the classic arcade game, showcasing cross-platform development capabilities using Uno Platform Foundation and the MVVM architectural pattern. This project demonstrates proficiency in game development, cross-platform technologies, and modern software architecture principles.

**Cross-Platform Architecture**

The Space Invaders Game leverages Uno Platform Foundation to achieve true cross-platform compatibility across Windows, macOS, Linux, iOS, and Android platforms. This approach allows for a single codebase that provides native performance and user experience on each target platform while maintaining consistency in game mechanics and visual design.

The Uno Platform implementation ensures that the game takes advantage of platform-specific features and optimizations while maintaining a unified development experience. This approach significantly reduces development time and maintenance overhead compared to traditional platform-specific implementations.

**MVVM Pattern Implementation**

The game architecture follows the Model-View-ViewModel (MVVM) pattern, providing clear separation between game logic, user interface, and data management. This architectural approach ensures that the game logic remains platform-agnostic while the user interface can be customized for each platform's specific design guidelines.

The MVVM implementation includes sophisticated data binding mechanisms that automatically synchronize the game state with the user interface. This ensures that all game elements, including player position, enemy movements, and score tracking, are consistently displayed across all platforms.

**Game Mechanics and Logic**

The Space Invaders implementation includes all classic game mechanics including player movement, shooting mechanics, enemy AI, collision detection, and scoring systems. The game logic is implemented using modern C# patterns and practices, ensuring maintainability and extensibility for future enhancements.

The enemy AI system demonstrates advanced programming techniques, including state machines and behavioral patterns that create engaging and challenging gameplay. The collision detection system ensures accurate hit detection while maintaining optimal performance across all target platforms.

**User Interface Design**

The game's user interface is designed using XAML, providing a declarative approach to UI development that integrates seamlessly with the MVVM pattern. The interface includes responsive design elements that adapt to different screen sizes and orientations, ensuring optimal gameplay experience on both desktop and mobile platforms.

The visual design maintains the classic Space Invaders aesthetic while incorporating modern UI elements and animations. This approach provides familiarity for players while leveraging contemporary design principles for improved user experience.

**Performance Optimization**

The game implementation includes various performance optimization techniques to ensure smooth gameplay across all target platforms. These optimizations include efficient rendering techniques, memory management strategies, and platform-specific performance enhancements.

The cross-platform nature of the implementation requires careful consideration of performance characteristics across different devices and operating systems. The Uno Platform framework provides the necessary abstractions to achieve optimal performance while maintaining code consistency.

**Technical Excellence**

From a technical perspective, the Space Invaders Game demonstrates proficiency in cross-platform development, game programming, and modern software architecture. The combination of Uno Platform, MVVM pattern, and C# creates a robust foundation for game development that can be extended to more complex projects.

The project showcases advanced understanding of game development principles, cross-platform technologies, and user interface design. The result is a polished game implementation that provides an engaging experience while demonstrating technical sophistication and architectural excellence.`,
      githubUrl: 'https://github.com/AlejandroJoseDeOliveiraBarrancos/Spaceinvaders'
    },
    'game-of-life': {
      id: 'game-of-life',
      title: 'Conway\'s Game of Life',
      subtitle: 'Java Implementation of Cellular Automaton',
      description: 'An implementation of Conway\'s Game of Life using Java.',
      longDescription: 'An implementation of Conway\'s Game of Life using Java, demonstrating algorithmic thinking and object-oriented programming principles. This classic computer science simulation showcases cellular automaton concepts and efficient algorithm implementation.',
      technologies: ['Java', 'Algorithm', 'Simulation', 'Object-Oriented Programming', 'Cellular Automaton', 'Computer Science'],
      articleContent: `Conway's Game of Life represents a fascinating exploration of cellular automaton theory and algorithmic implementation using Java. This project demonstrates proficiency in algorithmic thinking, object-oriented programming principles, and computer science fundamentals while creating an engaging simulation of one of the most famous mathematical games.

**Algorithmic Foundation**

The implementation of Conway's Game of Life requires sophisticated algorithmic thinking to efficiently process the complex rules and interactions of cellular automata. The core algorithm must evaluate each cell's neighborhood, apply the game rules, and update the entire grid state in a single generation cycle. This process demands careful consideration of performance optimization and memory management.

The algorithm implementation demonstrates understanding of computational complexity and optimization techniques. The efficient processing of large grids requires strategic approaches to data structure selection and iteration patterns that minimize computational overhead while maintaining accuracy.

**Object-Oriented Design**

The Game of Life implementation showcases advanced object-oriented programming principles using Java. The design includes well-structured classes that encapsulate different aspects of the simulation, including cell management, grid operations, and rule application. This modular approach ensures maintainability and extensibility while providing clear separation of concerns.

The object-oriented design includes sophisticated patterns such as encapsulation, inheritance, and polymorphism. These patterns create a flexible architecture that can be easily extended to support additional features such as different rule sets, visualization options, and performance optimizations.

**Cellular Automaton Theory**

The project demonstrates deep understanding of cellular automaton theory and its practical applications. Conway's Game of Life serves as an excellent example of how simple rules can create complex, emergent behaviors. The implementation accurately captures these behaviors while providing insights into the mathematical principles underlying cellular automata.

The simulation includes features that showcase different patterns and behaviors that emerge from the game rules. These patterns include stable structures, oscillators, and moving patterns that demonstrate the fascinating complexity that can arise from simple deterministic rules.

**Performance Optimization**

The implementation includes various performance optimization techniques to handle large grids efficiently. These optimizations include efficient data structures, optimized iteration patterns, and memory management strategies that ensure the simulation can run smoothly even with complex patterns and large grid sizes.

The performance considerations extend to user interface responsiveness, ensuring that the simulation updates smoothly while maintaining accurate representation of the cellular automaton state. This balance between performance and accuracy demonstrates sophisticated understanding of software optimization principles.

**Educational Value**

The Game of Life implementation serves as an excellent educational tool for understanding computer science concepts, algorithmic thinking, and object-oriented programming. The project provides clear examples of how theoretical concepts can be implemented in practical software applications.

The simulation includes interactive features that allow users to experiment with different initial patterns and observe the emergent behaviors. This interactive aspect enhances the educational value while demonstrating proficiency in user interface design and user experience considerations.

**Technical Excellence**

From a technical perspective, the Conway's Game of Life implementation demonstrates proficiency in Java programming, algorithmic design, and computer science principles. The combination of theoretical understanding and practical implementation creates a robust foundation for more complex computational projects.

The project showcases advanced understanding of cellular automaton theory, algorithmic optimization, and object-oriented design patterns. The result is a sophisticated simulation that provides both educational value and technical demonstration while maintaining high code quality and architectural excellence.`,
      githubUrl: 'https://github.com/AlejandroJoseDeOliveiraBarrancos/GameOfLife'
    },
    'oberstaff-technical-test': {
      id: 'oberstaff-technical-test',
      title: 'Oberstaff Backend Technical Test',
      subtitle: 'Python Backend Development Assessment',
      description: 'A comprehensive backend development test solution demonstrating Python skills.',
      longDescription: 'A comprehensive backend development test solution for Oberstaff, demonstrating Python skills, API design, and problem-solving abilities. This project showcases technical proficiency in backend development and modern Python practices.',
      technologies: ['Python', 'Backend Development', 'API Design', 'Technical Assessment', 'Problem Solving', 'Web Development'],
      articleContent: `The Oberstaff Backend Technical Test represents a comprehensive demonstration of Python backend development skills and problem-solving abilities. This project showcases technical proficiency in modern Python practices, API design, and software engineering principles while addressing real-world development challenges.

**Technical Assessment Excellence**

The Oberstaff technical test required demonstrating proficiency across multiple aspects of backend development, including API design, data processing, and system architecture. The solution showcases ability to understand complex requirements, break down problems into manageable components, and implement robust solutions using Python best practices.

The assessment demanded not only technical skills but also the ability to work under time constraints while maintaining code quality and architectural soundness. This demonstrates professional-level development capabilities and the ability to deliver high-quality solutions in challenging environments.

**Python Development Proficiency**

The implementation showcases advanced Python programming skills, including effective use of modern Python features, libraries, and frameworks. The code demonstrates understanding of Python best practices, including proper error handling, code organization, and performance optimization techniques.

The Python implementation includes sophisticated patterns such as dependency injection, configuration management, and modular architecture. These patterns ensure that the solution is maintainable, testable, and extensible while demonstrating deep understanding of software engineering principles.

**API Design and Architecture**

The backend solution includes well-designed API endpoints that follow RESTful principles and modern web development standards. The API design demonstrates understanding of HTTP protocols, request/response patterns, and data serialization techniques that ensure reliable communication between client and server components.

The architecture includes proper separation of concerns, with clear boundaries between data access, business logic, and presentation layers. This approach ensures that the system remains maintainable and extensible while providing a solid foundation for future enhancements.

**Problem-Solving Approach**

The technical test required solving complex problems using systematic approaches and algorithmic thinking. The solution demonstrates ability to analyze requirements, identify potential challenges, and implement effective solutions that address both immediate needs and long-term considerations.

The problem-solving approach includes comprehensive testing strategies, error handling mechanisms, and performance optimization techniques. These elements ensure that the solution is robust, reliable, and capable of handling real-world usage scenarios.

**Code Quality and Best Practices**

The implementation follows industry best practices for code quality, including proper documentation, consistent coding standards, and comprehensive error handling. The code demonstrates professional-level attention to detail and commitment to producing maintainable, high-quality software.

The solution includes proper logging, monitoring, and debugging capabilities that facilitate maintenance and troubleshooting. These features demonstrate understanding of production-level software requirements and the importance of operational considerations in software development.

**Technical Excellence**

From a technical perspective, the Oberstaff Backend Technical Test demonstrates proficiency in Python development, API design, and software engineering principles. The solution showcases ability to work with modern development tools, frameworks, and practices while maintaining high standards for code quality and architectural design.

The project represents a significant achievement in technical assessment, demonstrating not only technical skills but also the ability to work effectively under pressure while delivering high-quality solutions. The result is a robust backend implementation that showcases professional-level development capabilities and technical excellence.`,
      githubUrl: 'https://github.com/AlejandroJoseDeOliveiraBarrancos/Oberstaff-technical-test'
    },
    'async-image-fetcher': {
      id: 'async-image-fetcher',
      title: 'Bulk Image Download API Service',
      subtitle: 'AsyncImage Fetcher API',
      description: 'A robust and efficient backend service designed to streamline the bulk downloading of images from remote URLs.',
      longDescription: 'A high-performance API service that handles bulk image downloading operations with smart concurrency control and efficient storage management. The system is designed to handle large-scale image processing tasks.',
      technologies: ['C#', '.NET Core', 'Async Programming', 'Image Processing', 'API', 'Concurrency Control'],
      articleContent: `The AsyncImage Fetcher API represents a sophisticated solution for bulk image downloading operations, showcasing advanced async programming techniques and efficient resource management. This project demonstrates proficiency in high-performance backend development, concurrency control, and large-scale data processing using modern .NET technologies.

**High-Performance Architecture**

The AsyncImage Fetcher API is designed with performance as a primary consideration, implementing sophisticated async programming patterns that maximize throughput while maintaining system stability. The architecture leverages .NET Core's async capabilities to handle multiple concurrent download operations without blocking threads or consuming excessive system resources.

The system includes intelligent concurrency control mechanisms that prevent system overload while maximizing download efficiency. This balance ensures that the service can handle large-scale image processing tasks without compromising system performance or stability.

**Concurrency Control Excellence**

One of the most challenging aspects of bulk image downloading is managing concurrent operations without overwhelming the system or remote servers. The AsyncImage Fetcher API implements sophisticated concurrency control that dynamically adjusts the number of concurrent downloads based on system resources and network conditions.

The concurrency control system includes features such as rate limiting, retry mechanisms, and intelligent queuing that ensure optimal performance while respecting remote server capabilities and system resources. This approach demonstrates deep understanding of distributed systems and resource management principles.

**Efficient Storage Management**

The system includes comprehensive storage management capabilities that ensure efficient handling of downloaded images. This includes duplicate detection mechanisms, storage optimization techniques, and intelligent file organization that minimizes storage overhead while maintaining accessibility.

The storage management system implements sophisticated algorithms for detecting and handling duplicate images, ensuring that storage space is used efficiently while maintaining data integrity. This approach demonstrates understanding of data management principles and optimization techniques.

**Robust Error Handling**

The AsyncImage Fetcher API includes comprehensive error handling mechanisms that ensure reliable operation even when encountering network issues, server errors, or resource constraints. The system implements sophisticated retry logic, fallback mechanisms, and error reporting that provide visibility into system performance and issues.

The error handling includes intelligent retry strategies that adapt to different types of failures, ensuring maximum success rates while avoiding unnecessary load on remote servers. This approach demonstrates professional-level understanding of distributed systems reliability and fault tolerance.

**Scalability and Performance**

The system is designed for scalability, with architecture that can handle varying workloads and user demands. The implementation includes performance monitoring, resource usage tracking, and optimization mechanisms that ensure consistent performance across different usage scenarios.

The scalability features include horizontal scaling capabilities, load balancing considerations, and resource optimization techniques that ensure the system can grow with increasing demands while maintaining performance and reliability.

**Technical Excellence**

From a technical perspective, the AsyncImage Fetcher API demonstrates proficiency in modern .NET development, async programming, and high-performance system design. The combination of sophisticated concurrency control, efficient storage management, and robust error handling creates a production-ready solution for large-scale image processing tasks.

The project showcases advanced understanding of distributed systems, resource management, and performance optimization techniques. The result is a robust, scalable, and efficient system that provides a solid foundation for bulk image processing operations while maintaining high standards for code quality and architectural excellence.`,
      githubUrl: 'https://github.com/AlejandroJoseDeOliveiraBarrancos/AsyncImage-Fetcher-API'
    },
    'chat-app-microservices': {
      id: 'chat-app-microservices',
      title: 'Distributed Real-time Chat Application',
      subtitle: 'Chat App Microservices',
      description: 'A distributed system designed to enable users to communicate through real-time messaging in chat rooms.',
      longDescription: 'A comprehensive chat application built with microservices architecture, supporting real-time messaging, user management, and scalable communication features. The system emphasizes reliability and performance.',
      technologies: ['Microservices', 'Real-time', 'C#', 'Distributed Systems', 'Chat', '.NET Core', 'SignalR'],
      articleContent: `The Distributed Real-time Chat Application represents a comprehensive solution for modern communication needs, showcasing advanced microservices architecture and real-time messaging capabilities. This project demonstrates proficiency in distributed systems design, real-time communication, and scalable application architecture using modern .NET technologies.

**Microservices Architecture**

The chat application is built using a sophisticated microservices architecture that separates different aspects of the system into independent, scalable services. This approach ensures that each component can be developed, deployed, and scaled independently while maintaining system reliability and performance.

The microservices architecture includes specialized services for user management, message routing, real-time communication, and system monitoring. Each service is designed with specific responsibilities and clear interfaces that enable seamless communication while maintaining system boundaries and data consistency.

**Real-Time Communication Excellence**

The heart of the chat application lies in its real-time communication capabilities, implemented using SignalR technology. This enables instant message delivery, live typing indicators, and real-time presence awareness that creates an engaging and responsive user experience.

The real-time implementation includes sophisticated features such as message persistence, delivery confirmation, and offline message handling. These features ensure that users never miss important communications while maintaining the responsiveness that makes real-time chat applications engaging.

**User Management and Authentication**

The system includes comprehensive user management capabilities that handle user registration, authentication, and profile management. The user management service implements modern security practices including password hashing, session management, and role-based access control.

The authentication system integrates seamlessly with the real-time communication features, ensuring that only authorized users can access chat rooms and participate in conversations. This integration demonstrates understanding of security considerations in distributed systems.

**Scalable Message Processing**

The message processing system is designed for scalability, with architecture that can handle varying message volumes and user loads. The system includes intelligent message routing, load balancing, and caching mechanisms that ensure consistent performance even under high load conditions.

The message processing includes features such as message queuing, batch processing, and intelligent retry mechanisms that ensure reliable message delivery while maintaining system performance. This approach demonstrates understanding of distributed systems reliability and performance optimization.

**System Monitoring and Reliability**

The chat application includes comprehensive monitoring and logging capabilities that provide visibility into system performance, user behavior, and potential issues. This monitoring enables proactive system management and rapid response to performance or reliability issues.

The reliability features include health checks, circuit breakers, and graceful degradation mechanisms that ensure the system remains available even when individual components experience issues. This approach demonstrates professional-level understanding of distributed systems reliability patterns.

**Technical Excellence**

From a technical perspective, the Distributed Real-time Chat Application demonstrates proficiency in modern .NET development, microservices architecture, and real-time communication technologies. The combination of SignalR, microservices patterns, and distributed systems principles creates a robust foundation for scalable communication applications.

The project showcases advanced understanding of distributed systems design, real-time communication protocols, and scalable application architecture. The result is a production-ready chat application that provides reliable, scalable, and engaging communication capabilities while maintaining high standards for code quality and architectural excellence.`,
      githubUrl: 'https://github.com/AlejandroJoseDeOliveiraBarrancos/chat-app-microservices'
    },
    'youtube-api-testing': {
      id: 'youtube-api-testing',
      title: 'YouTube Data API Integration Project',
      subtitle: 'YouTube API Testing Project',
      description: 'The YouTube Data API allows you to incorporate features that are normally executed on the YouTube website into your own website or application.',
      longDescription: 'This project demonstrates various YouTube Data API integrations and data handling capabilities. It showcases how to incorporate YouTube features into web applications, including data retrieval, video information processing, and API best practices.',
      technologies: ['JavaScript', 'YouTube API', 'Data Integration', 'Web Development', 'API', 'HTTP Requests'],
      articleContent: `The YouTube Data API Integration Project represents a comprehensive exploration of YouTube's powerful API capabilities, showcasing proficiency in API integration, data processing, and modern web development techniques. This project demonstrates how to effectively incorporate YouTube features into web applications while following best practices for API usage and data handling.

**API Integration Excellence**

The project demonstrates sophisticated understanding of YouTube Data API endpoints, authentication mechanisms, and data retrieval patterns. The implementation includes proper API key management, request handling, and response processing that ensures reliable integration with YouTube's services while respecting rate limits and usage policies.

The API integration includes features such as video search, channel information retrieval, and playlist management that showcase the breadth of YouTube's API capabilities. Each integration is implemented with proper error handling and fallback mechanisms that ensure robust operation even when encountering API limitations or network issues.

**Data Processing and Management**

The project includes comprehensive data processing capabilities that handle YouTube API responses efficiently and present the information in user-friendly formats. The data processing includes parsing, filtering, and formatting operations that transform raw API data into meaningful information for end users.

The data management system includes caching mechanisms, data validation, and storage optimization that ensure efficient handling of YouTube data while minimizing API calls and improving application performance. This approach demonstrates understanding of data management principles and optimization techniques.

**User Experience Design**

The YouTube API integration includes thoughtful user experience design that makes YouTube data accessible and engaging for users. The interface includes features such as video previews, channel information displays, and interactive search capabilities that provide rich, engaging experiences.

The user experience design considers factors such as loading states, error handling, and responsive design that ensure the application works seamlessly across different devices and network conditions. This attention to user experience demonstrates understanding of modern web development principles and user-centered design.

**Error Handling and Resilience**

The implementation includes comprehensive error handling mechanisms that gracefully manage API failures, network issues, and data processing errors. The error handling includes user-friendly error messages, retry mechanisms, and fallback options that ensure the application remains functional even when encountering problems.

The resilience features include rate limit handling, timeout management, and graceful degradation that ensure the application can handle various failure scenarios while maintaining user experience. This approach demonstrates professional-level understanding of API integration challenges and solutions.

**Performance Optimization**

The project includes various performance optimization techniques that ensure efficient API usage and responsive user experience. These optimizations include request batching, response caching, and intelligent data loading that minimize API calls while maximizing application performance.

The performance considerations extend to user interface responsiveness, ensuring that API operations don't block user interactions while maintaining real-time updates and smooth user experience. This balance demonstrates understanding of performance optimization principles and user experience considerations.

**Technical Excellence**

From a technical perspective, the YouTube Data API Integration Project demonstrates proficiency in modern JavaScript development, API integration, and web application architecture. The combination of sophisticated API handling, data processing, and user experience design creates a robust foundation for YouTube-integrated applications.

The project showcases advanced understanding of API design principles, data management techniques, and modern web development practices. The result is a comprehensive solution that provides practical examples of YouTube API integration while maintaining high standards for code quality, user experience, and technical excellence.`,
      githubUrl: 'https://github.com/AlejandroJoseDeOliveiraBarrancos/youtube-api-testing-project'
    }
  };

  const project = projectDetails[id || ''];

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="container">
          <div className="project-detail-header">
            <h1>Project Not Found</h1>
            <p>The requested project could not be found.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="container">
        <div className="project-detail-header">
          <div className="project-category">{project.technologies[0]} Development</div>
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                Live Demo
              </a>
            )}
          </div>
        </div>
        
        <div className="project-detail-content">
          <div className="content-section">
            <h2>Project Overview</h2>
            <p>{project.longDescription}</p>
          </div>

          <div className="content-section">
            <h2>Technologies Used</h2>
            <div className="tech-grid">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="content-section">
            <div className="article-content">
              {project.articleContent.split('\n\n').map((paragraph, index) => {
                if (paragraph.trim() === '') return null;
                
                // Check if it's a heading (starts with **)
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h3 key={index}>
                      {paragraph.slice(2, -2)}
                    </h3>
                  );
                }
                
                // Regular paragraph with formatting
                const formattedParagraph = paragraph
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>');
                
                return (
                  <p key={index} dangerouslySetInnerHTML={{ __html: formattedParagraph }} />
                );
              })}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
