# 审批资格与检测维护

管理员设置人员资格和维护范围，指定EHS人员维护检测规则。截图使用模拟数据。

## 管理员：指定人员资格与维护范围

1. 使用管理员账号进入“管理后台”。
2. 打开“审批资格与检测权限”，选择人员。
3. 在“个人作业资格”中添加适用申请部门、作业类别、资格结论、有效期和依据。未单独设置时，沿用“岗位默认作业资格”。
4. 需要停止某人办理指定作业时，设为“不具备”。个人授权到期后不能自动退回岗位默认资格。
5. 在“检测规则维护范围”中指定部门、动火或有限空间、有效期和依据。被指定人员须具备该部门EHS工程师或EHS经理岗位权限。
6. 填写调整原因，保存设置。系统记录调整前后的内容及办理人。

<details className="guide-capture">
<summary>查看界面示例</summary>
<a href="/diodes-ehs-guide/images/59c45496d74bcb5a92f6.png" target="_blank" rel="noopener" aria-label="人员审批资格，打开完整截图">
<img src="/diodes-ehs-guide/images/59c45496d74bcb5a92f6.png" alt="人员审批资格" loading="lazy" />
</a>
</details>


有限空间最终批准人须另填企业主要负责人或书面委托人，并填写授权有效期及依据。

## 指定EHS人员：维护检测规则

1. 使用具备有效维护授权的EHS账号打开“EHS测量设置”。
2. 选择“动火”或“有限空间”，再选择已授权的部门。
3. 按公司批准制度录入检测项目、单位、最低和最高允许值，明确边界值是否包含。
4. 填写制度依据和调整原因，保存设置。两类作业票分别维护，互不覆盖。
5. 申请人和现场人员填写实际测量值。系统按作业票类别读取检测规则，并校验完整性和范围。

<details className="guide-capture">
<summary>查看界面示例</summary>
<a href="/diodes-ehs-guide/images/d19cb0d6b45f9ef57c4e.png" target="_blank" rel="noopener" aria-label="指定检测规则维护，打开完整截图">
<img src="/diodes-ehs-guide/images/d19cb0d6b45f9ef57c4e.png" alt="指定检测规则维护" loading="lazy" />
</a>
</details>


维护授权到期或EHS岗位被撤销后，不能更改检测规则。

修改仅影响新提交票据，已提交票据保留原限值。若界面提示旧部门共用规则，先按作业类别复核后再保存。
