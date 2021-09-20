/* imports from node_modules */
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
/* imports from app */
import { Cities } from '@monographia/data-handler/city/city.mock';
import { Institutions } from '@monographia/data-handler/institution/institution.mock';
import { People } from '@monographia/data-handler/person/person.mock';
import { Periodicals } from '@monographia/data-handler/periodical/periodical.mock';
import { Projects } from '@monographia/data-handler/project/project.mock';
import { Publications } from '@monographia/data-handler/publication/publication.mock';
import { Publishers } from '@monographia/data-handler/publisher/publisher.mock';
import { Schools } from '@monographia/data-handler/school/school.mock';
import { Tags } from '@monographia/data-handler/tag/tag.mock';
import { Users } from '@monographia/data-handler/user/user.mock';
@Injectable({
	providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
	public createDb(){
		return({
			cities: Cities,
			institution: Institutions,
			people: People,
			periodicals: Periodicals,
			project: Projects,
			publications: Publications,
			publishers: Publishers,
			schools: Schools,
			tags: Tags,
			user: Users
		});
	}
}
