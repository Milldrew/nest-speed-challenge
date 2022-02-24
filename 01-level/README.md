<h1>Speed Run Level 1</h1>

This is the first speed run in a series of speed runs based around the NestJs Official course.

Each level exists on a separate branch.

To complete the speed run complete the following tasks.
<br/>
Task 1. generate a nest.js project named ilovebeverages
<br/>
Task 2. create a CRUD resource called beverages
<br/>
Task 3. fill in the create beverage dto and the update beverage dto
<br/>
Task 4. Test your CRUD routes
<br/>
Task 5. add mock data to the beverages service
<br/>
Task 6. Validate Incoming objects
<br/>
Task 7. Configure the ValidationPipe to only except whitelisted date
<br/>
Task 8. Transform the incoming data to DTO instances using the transform pipe. And give an example of how the transform pipe can perform type conversion.
<br/>

<ul>

<li>
 add useGlobalPipes(new ValidationPipe()) to app
</li>
<li>
 add modules class-validator class-transformer
</li>
<li>
 use decorators like @IsString to validate the DTOs
</li>
<li>
 explain what a partial type is and how the updateBeverageDto is realized by extending createBeverage
</li>
 
</ul>

<br/>
A beverage has a unique ID a name , a brand and flavors

<br/>
Task 3. Make sure that yo have Error messages, DTOs that enable input validation, and handle malicious request data, as well as auto transform payloads to DTO instances
