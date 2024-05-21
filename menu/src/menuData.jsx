import DataUsageIcon from '@mui/icons-material/DataUsage';
import PersonIcon from '@mui/icons-material/Person';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import PasswordIcon from '@mui/icons-material/Password';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

//菜单的测试数据
const sideMenuConfigData = [
    { id: "init", title: "系统初始化", icon: DataUsageIcon },
    { id: "management", title: "用户管理", icon: GroupAddIcon },

    {
        id: "userMsg", title: "角色管理", icon: PersonIcon, children: [
            { id: "", title: "权限管理", icon: VerifiedUserIcon },
            { id: "pwdMsg", title: "密码管理", icon: PasswordIcon },
            { id: "keyMsg", title: "私钥管理", icon: VpnKeyIcon },
            { id: "agentMsg", title: "权限管理", icon: HealthAndSafetyIcon },
        ]
    },

    { id: "advMsg", title: "广告管理", icon: FeaturedVideoIcon },
    { id: "plyMsg", title: "评论管理", icon: ReplyAllIcon },

    {
        id: "title", title: "文章管理", icon: null, children: [
            { id: "caogaoMsg", title: "草稿件", icon: null },
            { id: "newFile", title: "新建文章", icon: null },
            { id: "firstMsg", title: "置顶管理", icon: null },
            { id: "recMsg", title: "推荐管理", icon: null },
            { id: "classMsg", title: "类型管理", icon: null },
            { id: "emailMsg", title: "邮箱管理", icon: null },
        ]
    },

    { id: "system", title: "系统设置", icon: null },
    { id: "userCenter", title: "个人中心", icon: null }
];

export default sideMenuConfigData;
