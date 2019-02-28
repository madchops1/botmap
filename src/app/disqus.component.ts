import { Component } from '@angular/core';


@Component({
    selector: 'single-post',
    template: `<disqus [identifier]="pageId"></disqus>`
})

export class SinglePostComponent {
    pageId = 'BotMap.io';
}