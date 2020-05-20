# Instructions

`cache-function` should return a function that invokes `cb`.

If the returned function is invoked with arguments that it has already seen
then it should return the cached result and not invoke `cb` again.

`cb` should only ever be invoked once for a given set of arguments.

# Requirements

### **What are some good real-life use cases for such a function?**
*Write your response here*
1. For Caching user data or authentication tokens in browser,
2. Speeding up databse queries, specially in relational DBs,
3. For optimizing web application performance using proper data strucutres, data-eviction policies etc.
4. For lowering bandwidth consumption.
### **What *extra* test cases can you add to the test file?**

*Add relevant test-cases in the test file*