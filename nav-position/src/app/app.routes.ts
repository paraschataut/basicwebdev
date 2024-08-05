import { Routes } from '@angular/router';
import { ProfileComponent } from './home/profile/profile.component';
import { ActivityComponent } from './activities/activity/activity.component';
import { WorkComponent } from './works/work/work.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TypingComponent } from './funtimes/typing/typing.component';
export const routes: Routes = [
	{
		path: 'home',
		component: ProfileComponent
	},
	{
		path: 'activity',
		component: ActivityComponent,
	},
	{
		path: 'work',
		component: WorkComponent,
	},
	{
		path: 'about',
		component: AboutComponent,
	},
	{
		path: 'contact',
		component: ContactComponent,
	},
	{
		path: 'games',
		component: TypingComponent,
	}
];
