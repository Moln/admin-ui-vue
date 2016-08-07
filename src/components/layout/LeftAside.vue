<template>
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <ul class="sidebar-menu">
                <li class="header">MAIN NAVIGATION</li>
                <li v-for="item in items" :class="['treeview']">
                    <a href="#">
                        <i class="fa fa-{{item.icon||'files-o'}}"></i>
                        <span>{{item.text}}</span>
                        <span class="pull-right-container">
                          <i v-if="item.items" class="fa fa-angle-left pull-right"></i>
                          <small v-for="tag in item.tags" class="label pull-right bg-{{tag.color || 'blue'}}">{{tag.text}}</small>
                        </span>
                    </a>
                    <ul v-if="item.items" class="treeview-menu">
                        <li v-for="subItem in item.items">
                            <a href="#{{subItem.url}}"><i class="fa fa-{{subItem.icon || 'circle-o'}}"></i>{{subItem.text}}</a></li>
                    </ul>
                </li>
            </ul>
        </section>
        <!-- /.sidebar -->
    </aside>
</template>
<script>
    export default{
        data(){
            return {
                items: [
                    {
                        "text": "\u7cfb\u7edf",
                        "index": 0,
                        "expanded": true,
                        "items": [
                            {
                                "text": "\u7528\u6237\u7ba1\u7406",
                                "index": 0,
                                "url": "\/zfegg\/admin\/user"
                            },
                            {
                                "text": "\u89d2\u8272\u7ba1\u7406",
                                "index": 1,
                                "url": "\/zfegg\/admin\/role"
                            },
                            {
                                "text": "\u6743\u9650\u5217\u8868",
                                "index": 2,
                                "url": "\/zfegg\/admin\/resource"
                            },
                            {
                                "text": "\u4e2a\u4eba\u4fe1\u606f",
                                "index": 3,
                                "url": "\/zfegg\/admin\/profile"
                            }
                        ]
                    },
                    {
                        "text": "Test",
                        "index": 0,
                        "url": "\/test"
                    },
                    {
                        "text": "TestTags",
                        "index": 0,
                        "url": "\/test-tags",
                        "tags":[
                            {"text":"new","color":"green"}
                        ]
                    },
                ]
            }
        }
    }
</script>
